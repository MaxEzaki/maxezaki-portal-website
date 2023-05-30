import "./reset.css";
import "./globals.css";
import styles from "./layout.module.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
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
