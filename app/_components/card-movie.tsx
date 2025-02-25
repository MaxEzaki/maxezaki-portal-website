import styles from "../_components/card-movie.module.css";
import { Movie } from "../types/index.d";

interface CardMoviewProps {
  list: Movie;
}

// vimeo埋め込みを前提とした作りにしてる
const CardMovie = ({ list }: CardMoviewProps) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.embed}
        dangerouslySetInnerHTML={{ __html: list.embed }}
      ></div>
    </div>
  );
};

export default CardMovie;
