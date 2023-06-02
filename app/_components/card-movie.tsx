import styles from "../_components/card-movie.module.css";

// vimeo埋め込みを前提とした作りにしてる
const CardMovie = (props: { list: any }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.embed}
        dangerouslySetInnerHTML={{ __html: props.list.embed }}
      ></div>
    </div>
  );
};

export default CardMovie;
