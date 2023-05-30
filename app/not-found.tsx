import styles from "./page.module.css";
import Card from "./_components/card";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      not found のページ
      <Card type="404" />
    </div>
  );
};

export default NotFound;
