import styles from "./page.module.css";
import Card from "./_components/card";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      {/*   404 ですよー */}
      <Card type="404" />
    </div>
  );
};

export default NotFound;
