"use client";
import styles from "../_components/card.module.css";
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import { format } from "date-fns";
import ContactButton from "./contact-button";
import { hashtags } from "../_data/hashtags";
import { characters } from "../_data/characters";
import Link from "next/link";
import parse, { domToReact } from "html-react-parser";

/**
 * 実際の表示幅（card.module.css の .wrapper と揃える）。
 * これを誤ると next/image が srcset から不要に大きい画像を選んでしまう。
 */
const IMAGE_SIZES = "(max-width: 470px) 100vw, 470px";

const subscribeToLocation = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
};

/** 文字列 / null を返すので useSyncExternalStore のスナップショットとして安定する */
const readTypeParam = () =>
  new URLSearchParams(window.location.search).get("type");

/** サーバーではクエリを見ず、常に既定のカードを描画する */
const readTypeParamOnServer = () => null;

const subscribeToMinute = (onChange: () => void) => {
  const id = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(id);
};

/** 同じ分内では同一文字列を返すのでスナップショットとして安定する */
const readNow = () => format(new Date(), "yyyy/MM/dd HH:mm");

/**
 * ページは静的生成されるため、サーバーで時刻を描画するとビルド時刻が
 * HTML に焼き付き、クライアントの現在時刻とハイドレーション不一致になる。
 * サーバーでは描画せず、ハイドレート後にクライアントの時刻で埋める。
 */
const readNowOnServer = () => null;

const Card = (props: { type?: string }) => {
  const isNotFound = props.type === "404";

  // useSearchParams() を使うと Suspense が fallback に落ち、カードごと
  // HTML から消えてしまう。外部ストアとして読むことで静的 HTML に
  // 既定のカードが入り、?type= のディープリンクも維持できる。
  const rawTypeParam = useSyncExternalStore(
    subscribeToLocation,
    readTypeParam,
    readTypeParamOnServer
  );
  const paramType =
    rawTypeParam && characters.some((c) => c.type === rawTypeParam)
      ? rawTypeParam
      : null;

  const now = useSyncExternalStore(
    subscribeToMinute,
    readNow,
    readNowOnServer
  );

  const [manualType, setManualType] = useState<string | null>(null);
  const [preloadOthers, setPreloadOthers] = useState(false);

  // クエリが変わったら手動選択をリセットする
  const prevParamType = useRef(paramType);
  if (prevParamType.current !== paramType) {
    prevParamType.current = paramType;
    setManualType(null);
  }

  const activeType = isNotFound ? "404" : manualType ?? paramType ?? "index";

  const filterCharacter = useCallback((characterType: string) => {
    return characters.filter((e) => e.type === characterType);
  }, []);

  const filtredCharacter = useMemo(
    () => filterCharacter(activeType),
    [filterCharacter, activeType]
  );

  // 表示中の画像の取得と帯域を奪い合わないよう、アイドルまで待ってから
  // 残りの画像を裏で温める。
  useEffect(() => {
    if (isNotFound) return;
    const w = window as typeof window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number }
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback && w.cancelIdleCallback) {
      const id = w.requestIdleCallback(() => setPreloadOthers(true), {
        timeout: 3000,
      });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setPreloadOthers(true), 1500);
    return () => window.clearTimeout(id);
  }, [isNotFound]);

  const handleCharacter = (value: string) => {
    setManualType(value);
  };

  const replace = (node: any) => {
    if (node.name === "a") {
      return (
        <Link {...node.attribs} rel="noreferrer">
          {domToReact(node.children)}
        </Link>
      );
    }
  };

  const hiddenCharacters = useMemo(
    () => characters.filter((c) => c.type !== "404" && c.type !== activeType),
    [activeType]
  );

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        {filtredCharacter &&
          filtredCharacter.map((e, index) => (
            <div key={index}>
              <p className={styles.name}>{e.name}</p>
              <div className={styles.imageContainer}>
                <Image
                  src={e.image.src}
                  alt={e.image.alt}
                  fill
                  sizes={IMAGE_SIZES}
                  style={{
                    objectFit: "cover",
                  }}
                  placeholder="blur"
                  priority
                  quality={75}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.description}>
                  {parse(e.description, { replace })}
                </p>
                <div className={styles.tags}>
                  {!isNotFound ? (
                    hashtags.map((e) => (
                      <a
                        className={styles.tagItem}
                        key={e.id}
                        onClick={() => handleCharacter(e.value)}
                      >
                        #{e.name}
                      </a>
                    ))
                  ) : (
                    <Link href={"/"} onClick={() => handleCharacter("index")}>
                      トップページへ戻る &gt;&gt;
                    </Link>
                  )}
                </div>
                {/* 行の高さを確保して、時刻が入るときのガタつきを防ぐ */}
                <p className={styles.time}>{now ?? "\u00a0"}</p>
              </div>
              <div className={"flex items-center justify-center py-6"}>
                <ContactButton />
              </div>
            </div>
          ))}
      </div>

      {/*
        タグ切り替え時に待たされないよう、表示中以外の画像を先に取得しておく。
        表示中のものと同じ sizes / quality を渡すことで、ブラウザが srcset から
        選ぶ URL が一致し、切り替え時にそのままキャッシュヒットする。
      */}
      {preloadOthers && (
        <div className={styles.preload} aria-hidden="true">
          {hiddenCharacters.map((c) => (
            <div className={styles.preloadItem} key={c.type}>
              <Image
                src={c.image.src}
                alt=""
                fill
                sizes={IMAGE_SIZES}
                quality={75}
                loading="eager"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
