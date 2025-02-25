import styles from "./page.module.css";
import Card from "./_components/card";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={null}>
        <Card />
      </Suspense>
    </div>
  );
};

export default Page;
