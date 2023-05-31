import styles from "./page.module.css";
import Card from "./_components/card";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <Card type="404" />
      {/* <p>404 not found page </p>
      <br />
      <Link href={"/"}>go to top</Link> */}
    </div>
  );
};

export default NotFound;
