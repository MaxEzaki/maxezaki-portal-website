import styles from "./page.module.css";
import { interviews } from "../_data/interviews";
import CardInterview from "../_components/card-interview";

const Page = () => {
  return (
    <div className="my-10 max-w-xl px-6">
      <h3 className="mb-4 text-lg font-bold">インタビュー記事一覧</h3>
      <div className={styles.wrapper}>
        {interviews.map((e) => (
          <CardInterview list={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
