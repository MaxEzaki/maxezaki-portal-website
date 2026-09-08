import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ContactButton from "../_components/contact-button";

const siteName = "Max Ezaki - Portal Website";
const title = "About";
const description =
  "現役ドイツ人ハーフ Max_Ezaki のプロフィール。これまでの歩み、やっていること、取材記事、連絡先。";
const url = "https://maxezaki.com/about";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: `${title} - ${siteName}`,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "profile",
    images: [{ url: "/opengraph-image.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} - ${siteName}`,
    description,
    site: "@Max_Ezaki",
    creator: "@Max_Ezaki",
    images: [{ url: "/twitter-image.jpeg", width: 1200, height: 630 }],
  },
};

const timeline = [
  {
    place: "ドイツで生まれる",
    text: "ドイツ人と日本人のあいだに生まれました。マックスは本名です。",
  },
  {
    place: "日本で育つ",
    text: "中学・高校でパーカッション、ドラム、ベースを担当。ドラムは椅子に座っただけでプレッシャーを感じて挫折、パーカッションが性に合って今に至ります。",
  },
  {
    place: "ドイツへ",
    text: "留学。当時の暮らしぶりは、取材記事のタイトルにある「極貧ドイツ留学生」のとおりです。",
  },
  {
    place: "イギリス（ロンドン）へ",
    text: "2011〜2012 年ごろ滞在。ブログ「リズム音痴」の初期の記事（SIM フリー iPhone、MacBook Air、モレスキン、パーカッション専門店）はロンドンで書いたものです。",
  },
  {
    place: "日本へ帰国、IT 業界へ",
    text: "塾・予備校の非常勤講師（担当は数学、理科、英語、ときどき国語。社会はホントにムリ。最後はイギリスで教えていました）を経て、何を思ったのか帰国後にプログラマーに。画面越しに英数字の羅列をターンッ！していく日々です。当時のモットーは「考える事をしないのなら人間やめちまえ」。これは今でも変わりません。",
  },
];

const interviews = [
  {
    title:
      "フリー素材のモデルってどんな仕事？ 現役ドイツ人ハーフに聞いてきた | サイドラインズ",
    link: "https://sidelines.jp/post-3114",
  },
  {
    title:
      "極貧ドイツ留学生がマルチエンジニアに。今日とは違う明日の生き方 | サイドラインズ",
    link: "https://sidelines.jp/post-3117",
  },
  {
    title:
      "「日本よ、これがフリー素材だ!!」ある現役ドイツ人ハーフが PAKUTASO でフリー素材化する顛末に大きく関わってしまった件 | タムカイズム",
    link: "https://tamkaism.com/2014/06/24/max-freephoto/",
  },
  {
    title:
      "「辞めたいと思ったら、辞めればいい」フリー素材モデルの人生観を聞いてみた | REBOOT",
    link: null,
  },
];

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.imageContainer}>
          <Image
            src="/max_404.jpeg"
            alt="Max_Ezaki"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            priority
            className={styles.image}
          />
        </div>

        <div className={styles.body}>
          <h1 className={styles.name}>Max_Ezaki</h1>
          <p className={styles.title}>現役ドイツ人ハーフ</p>

          <div className={styles.lead}>
            <p>
              ドイツ生まれ、日本育ち。ドイツ→日本→ドイツ→イギリス→日本と動いて、いまはプログラマーをしています。パーカッションを叩き、ソーセージを作り、ビールを飲む。2014
              年からフリー素材サイト「ぱくたそ」のモデルもやっています。
            </p>
            <p>
              「現役ドイツ人ハーフ」という肩書きは、ぱくたそデビューのときに{" "}
              <Link
                href="https://twitter.com/unificat"
                target="_blank"
                rel="noreferrer"
              >
                @unificat
              </Link>{" "}
              さんが付けてくれたキャッチコピーで、当時は本人たちもよく分かっていませんでした。12
              年経ったいまも、たぶん現役です。
            </p>
          </div>

          <section className={styles.section}>
            <h2>これまで</h2>
            <ol className={styles.timeline}>
              {timeline.map((e) => (
                <li key={e.place}>
                  <span className={styles.place}>{e.place}</span>
                  <br />
                  {e.text}
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.section}>
            <h2>やっていること</h2>

            <h3>フリー素材モデル（ぱくたそ）</h3>
            <p>
              2014 年 6 月、「フリー写真素材
              PAKUTASO/ぱくたそ」でモデルデビュー。企画名は「日本よ、これがフリー素材だ!!
              —
              現役ドイツ人ハーフの使える写真素材」。ラーメン屋、古民家、オフィスで変な顔をしています。素材は{" "}
              <Link
                href="https://www.pakutaso.com/Max_Ezaki.html"
                target="_blank"
                rel="noreferrer"
              >
                ぱくたその Max_Ezaki ページ
              </Link>{" "}
              から自由に使えます。ヴィレッジヴァンガードのアイマスク、CRISIS
              HOMME の化粧下地など、モデルの仕事もときどき。
            </p>

            <h3>音楽</h3>
            <p>
              自称パーカッショニスト。ファンク、ソウル、R&amp;B 系のバンド{" "}
              <Link href="https://bommer.me" target="_blank" rel="noreferrer">
                BOMmER
              </Link>{" "}
              でパーカッションを担当。カホンがメイン。ほかにもいろいろなバンドやアーティストと共演・サポートしてきました。荷物量がエグいので、ライブのときはタクシー絶対。
            </p>

            <h3>司会・動画</h3>
            <p>
              イベントや結婚式の司会（日英含む）、動画への出演もたまに。出演した動画は{" "}
              <Link href="/movie">出演動画一覧</Link> からご覧いただけます。
            </p>

            <h3>絵</h3>
            <p>
              たまに描きます。ハーフだけで作った「ハーフ芸術集団
              HArts」で企画運営と出展をしていました。作風は抽象画。「エロいものを如何にエロく見せなくさせるか」がコンセプト。
            </p>

            <h3>好きなもの</h3>
            <p>
              ビール、ソーセージ（自分で作る）、ハンバーガー（自分で作る）、Apple
              製品（貢ぐ）、モレスキン。ドイツのビールとソーセージのコンボは、日本で言うなら「和菓子とお茶」ぐらいの破壊力です。
            </p>
          </section>

          <section className={styles.section}>
            <h2>取材していただいた記事</h2>
            <ul className={styles.list}>
              {interviews.map((e) => (
                <li key={e.title}>
                  {e.link ? (
                    <Link href={e.link} target="_blank" rel="noreferrer">
                      {e.title}
                    </Link>
                  ) : (
                    <>
                      {e.title}
                      <span className={styles.note}>（現在は公開終了）</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <p>
              一覧は <Link href="/interview">インタビュー記事一覧</Link>{" "}
              にもまとめています。
            </p>
          </section>

          <section className={styles.section}>
            <h2>連絡先</h2>
            <p>
              感想、お仕事のご相談は Contact からお願いします。フォームは
              Jotform（外部サービス）に送信されます。返信には時間がかかることがあります。
            </p>
            <ul className={styles.list}>
              <li>
                X:{" "}
                <Link
                  href="https://twitter.com/Max_Ezaki"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Max_Ezaki
                </Link>
              </li>
              <li>
                Instagram:{" "}
                <Link
                  href="https://www.instagram.com/max_ezaki/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @max_ezaki
                </Link>
              </li>
              <li>
                ブログ:{" "}
                <Link
                  href="https://rhythm-onchi.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  リズム音痴
                </Link>
                （2011 年から書いています）
              </li>
            </ul>
            <div className={styles.contact}>
              <ContactButton />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
