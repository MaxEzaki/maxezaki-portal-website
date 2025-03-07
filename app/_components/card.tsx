"use client";
import styles from "../_components/card.module.css";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { format } from "date-fns";
import ContactButton from "./contact-button";
import { hashtags } from "../_data/hashtags";
import { characters } from "../_data/characters";
import Link from "next/link";
import parse, { domToReact } from "html-react-parser";
import { useSearchParams } from "next/navigation";

const Card = (props: { type?: string }) => {
  const searchParams = useSearchParams();

  const filterCharacter = useCallback((characterType: string) => {
    return characters.filter((e) => e.type === characterType);
  }, []);

  // URLパラメータからtypeを取得
  const initialType = useCallback(() => {
    if (props.type === "404") return "404";
    const typeParam = searchParams?.get("type");
    if (typeParam && characters.some((c) => c.type === typeParam)) {
      return typeParam;
    }
    return "index";
  }, [props.type, searchParams]);

  const [filtredCharacter, setFiltredCharacter] = useState(() =>
    filterCharacter(initialType())
  );

  // URLパラメータが変更されたときに表示を更新
  useEffect(() => {
    const type = initialType();
    setFiltredCharacter(filterCharacter(type));
  }, [filterCharacter, initialType]);

  const handleCharacter = (value: string) => {
    setFiltredCharacter(filterCharacter(value !== "index" ? value : "index"));
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

  // 画像の事前読み込み
  useEffect(() => {
    if (typeof window === "undefined") return;

    const preloadImages = async () => {
      try {
        await Promise.all(
          characters.map((character) => {
            return new Promise<HTMLImageElement>((resolve, reject) => {
              const img = document.createElement("img");
              img.onload = () => resolve(img);
              img.onerror = () =>
                reject(
                  new Error(`Failed to load image: ${character.image.src}`)
                );
              img.src = character.image.src;
            });
          })
        );
      } catch (error) {
        console.error("画像のプリロード中にエラーが発生しました:", error);
      }
    };

    preloadImages();
  }, []);

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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={75}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.description}>
                  {parse(e.description, { replace })}
                </p>
                <div className={styles.tags}>
                  {props.type != "404" ? (
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
                <p className={styles.time}>
                  {format(new Date(), "yyyy/MM/dd HH:mm")}
                </p>
              </div>
              <div className={"flex items-center justify-center py-6"}>
                <ContactButton />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
