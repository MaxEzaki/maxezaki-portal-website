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

const blogPost = (path: string, label: string) => (
  <Link
    href={`https://rhythm-onchi.com${path}`}
    target="_blank"
    rel="noreferrer"
  >
    {label}
  </Link>
);

const timeline: { place: string; text: React.ReactNode }[] = [
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
    text: (
      <>
        留学。当時の暮らしぶりは、取材記事のタイトルにある「
        <Link
          href="https://sidelines.jp/post-3117"
          target="_blank"
          rel="noreferrer"
        >
          極貧ドイツ留学生
        </Link>
        」のとおりです。
      </>
    ),
  },
  {
    place: "イギリス（ロンドン）へ",
    text: (
      <>
        2011 年末に{blogPost("/2011/12/20/in_uk_now/", "渡英")}
        し、2012 年ごろまで滞在。ブログ「リズム音痴」の初期の記事（
        {blogPost("/2012/01/28/simfree-iphone4s-uk/", "SIM フリー iPhone")}、
        {blogPost("/2012/02/10/mba_user/", "MacBook Air")}、
        {blogPost("/2012/05/31/moleskinebeer/", "モレスキン")}、
        {blogPost("/2012/03/02/acton_perc/", "パーカッション専門店")}
        ）はロンドンで書いたものです。
      </>
    ),
  },
  {
    place: "日本へ帰国、IT 業界へ",
    text: "塾・予備校の非常勤講師（担当は数学、理科、英語、ときどき国語。社会はホントにムリ。最後はイギリスで教えていました）を経て、何を思ったのか帰国後にエンジニアに。画面越しに英数字の羅列をターンッ！していく日々です。当時のモットーは「考える事をしないのなら人間やめちまえ」。これは今でも変わりません。",
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

const blogHistory: { when: string; text: React.ReactNode }[] = [
  {
    when: "2005 年 4 月ごろ",
    text: "携帯サイト「魔法の i らんど」が一世を風靡していた時代に、「無料 HP ふりーぺ」で携帯サイト「リズム音痴」を設立（ふりーぺは 2013 年 7 月 1 日にサービス終了）",
  },
  {
    when: "2009 年 2 月",
    text: "fc2 が流行り始めたので、fc2 ブログ「リズム音痴」を開設",
  },
  {
    when: "2011 年 6 月",
    text: "独自ドメインが欲しいがために一念発起し、WordPress 版「リズム音痴」を新設。開設当初は「音楽について色々書いてやる！！」だったが気付けばほとんど書かず、Mac や iPhone、ドイツ・イギリスでの生活や旅、食べたものを書く場所になった",
  },
  {
    when: "2012〜2017 年",
    text: (
      <>
        {blogPost(
          "/2014/07/28/2014_bloggers_festival/",
          "ブロガーズフェスティバル"
        )}
        や{blogPost("/2014/04/21/blog-crowd-vol1/", "Blog Crowd")}
        に顔を出し、2014 年には
        {blogPost(
          "/2014/08/27/bloggersfestival2014/",
          "200 人の前で LT をした"
        )}
      </>
    ),
  },
  {
    when: "2026 年",
    text: "AIが快適すぎて脱WordPressしました",
  },
];

const debutYear = 2014;
const yearsSinceDebut = new Date().getFullYear() - debutYear;

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.imageContainer}>
          <Image
            src="/max_index.jpeg"
            alt="Max_Ezaki"
            width={800}
            height={570}
            priority
            className={styles.image}
          />
        </div>

        <div className={styles.body}>
          <h1 className={styles.name}>Max_Ezaki</h1>
          <p className={styles.title}>現役ドイツ人ハーフ</p>

          <div className={styles.lead}>
            <p>
              ドイツ生まれ、日本育ち。ドイツ→日本→ドイツ→イギリス→日本と動いて、今は一応エンジニアとして働いてます。パーカッションを叩き、ソーセージを作り、ビールを飲む。2014
              年からフリー素材サイト「
              <Link
                href="https://www.pakutaso.com/Max_Ezaki.html"
                target="_blank"
                rel="noreferrer"
              >
                ぱくたそ
              </Link>
              」のモデルもやっています。
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
              さんが付けてくれたキャッチコピーで、当時は本人たちもよく分かっていませんでした。
              {yearsSinceDebut} 年経ったいまも、たぶん現役です。
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
            <h2>リズム音痴について</h2>
            <p>
              ブログ「
              <Link
                href="https://rhythm-onchi.com"
                target="_blank"
                rel="noreferrer"
              >
                リズム音痴
              </Link>
              」の遍歴です。
            </p>
            <ol className={styles.timeline}>
              {blogHistory.map((e) => (
                <li key={e.when}>
                  <span className={styles.place}>{e.when}</span>
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
              PAKUTASO/ぱくたそ」でモデルデビュー。企画名は「
              <Link
                href="https://www.pakutaso.com/maxfreephoto.html"
                target="_blank"
                rel="noreferrer"
              >
                日本よ、これがフリー素材だ!! —
                現役ドイツ人ハーフの使える写真素材
              </Link>
              」。ラーメン屋、古民家、オフィスで変な顔をしています。素材は{" "}
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
              でパーカッションを担当。ほかにもいろいろなバンドやアーティストと共演・サポートしてきました。荷物量がエグいので、ライブのときはタクシー絶対。
            </p>

            <h3>司会・動画</h3>
            <p>
              イベントや結婚式の司会（日英含む）、動画への出演もたまに。出演した動画は{" "}
              <Link href="/movie">出演動画一覧</Link> からご覧いただけます。
            </p>

            <h3>絵</h3>
            <p>
              たまに描きます。ハーフだけで作った「ハーフ芸術集団
              HArts」で企画運営と出展をしていました。作風は抽象画。
            </p>

            <h3>好きなもの</h3>
            <p>
              ビール、ソーセージ
              <span className={styles.note}>（自分で作る）</span>
              、ハンバーガー
              <span className={styles.note}>（自分で作る）</span>
              、Apple 製品
              <span className={styles.note}>（貢ぐ）</span>
              。ドイツのビールとソーセージのコンボは、日本で言うなら「和菓子とお茶」ぐらいの破壊力です。
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
              感想、お仕事のご相談は Contact
              からお願いします。返信には時間がかかることがあります。
            </p>
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
