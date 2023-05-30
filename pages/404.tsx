import styles from "./page.module.css";
import Card from "../app/_components/card";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      404 のページ
      <Card type="404" />
    </div>
  );
};

export default NotFound;
