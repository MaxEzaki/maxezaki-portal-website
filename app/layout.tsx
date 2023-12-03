import "./reset.css";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import GoogleAnalytics from "./_components/GoogleAnalytics";
const siteName = "Max Ezaki - Portal Website";
const description = "Max Ezakiのポータルウェブサイト";
const url = "https://maxezaki.com";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@Max_Ezaki",
    creator: "@Max_Ezaki",
  },
  // verification: {
  // google: "サーチコンソールのやつ",
  // },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <GoogleAnalytics />
      <body suppressHydrationWarning={true}>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
