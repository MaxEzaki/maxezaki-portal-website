import styles from "./page.module.css";
import Card from "./_components/card";
import { cardPendingScript } from "./lib/card-pending";

const Page = () => {
  return (
    <div className={styles.wrapper}>
      {/* カードより先に実行させ、描画前に ?type= を判定する */}
      <script dangerouslySetInnerHTML={{ __html: cardPendingScript }} />
      <Card />
    </div>
  );
};

export default Page;
