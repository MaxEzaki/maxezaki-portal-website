import styles from "../_components/card-interview.module.css";
import Link from "next/link";
import Image from "next/image";
import { Interview } from "../types/index.d";

interface CardInterviewProps {
  list: Interview;
}

const CardInterview = ({ list }: CardInterviewProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={list.image}
          alt={list.title}
          fill
          style={{
            objectFit: "cover",
          }}
          loading="eager"
          className={styles.image}
        />
      </div>
      <p className={styles.title}>{list.title}</p>
      <Link href={list.link} target="_blank" className={styles.link}></Link>
    </div>
  );
};

export default CardInterview;
