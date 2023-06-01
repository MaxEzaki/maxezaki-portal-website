import styles from "../_components/card-interview.module.css";
import Link from "next/link";
import Image from "next/image";

const CardInterview = (props: { list: any }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={props.list.image}
          alt={props.list.title}
          fill
          style={{
            objectFit: "cover",
          }}
          loading="eager"
          className={styles.image}
        />
      </div>
      <p className={styles.title}>タイトル：{props.list.title}</p>
      <Link
        href={props.list.link}
        target="_blank"
        className={styles.link}
      ></Link>
    </div>
  );
};

export default CardInterview;
