import { notFound } from "next/navigation";
import styles from "../page.module.css";
import Card from "../_components/card";
import { characters } from "../_data/characters";

/** トップページ (/) が index を、404 ページが 404 を担当するため、ここでは除く */
const routeTypes = characters
  .map((c) => c.type)
  .filter((type) => type !== "index" && type !== "404");

export const generateStaticParams = async () =>
  routeTypes.map((type) => ({ type }));

/** ビルド時に生成した型以外は 404 にする（/about などの実ページは別ルートが優先される） */
export const dynamicParams = false;

const Page = async ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = await params;
  if (!routeTypes.includes(type)) notFound();

  return (
    <div className={styles.wrapper}>
      <Card type={type} />
    </div>
  );
};

export default Page;
