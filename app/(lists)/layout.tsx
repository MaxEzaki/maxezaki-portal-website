"use client";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";

export default function ListPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // TODO: 本当はこれpropsで渡したい
  const title =
    pathname === "/interview" ? "インタビュー記事一覧" : "出演動画一覧";
  return (
    <div className="my-10 max-w-xl px-6">
      <h3 className="mb-4 text-lg font-bold">{title}</h3>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
