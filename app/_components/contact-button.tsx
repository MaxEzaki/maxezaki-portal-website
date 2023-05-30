import styles from "./contact-button.module.css";

const clickHandle = () => {
  window.open("https://form.jotform.me/83018968684472", "_blank");
};

export const ContactButton = () => {
  return (
    <button className={styles.button} onClick={clickHandle}>
      Contact
    </button>
  );
};

export default ContactButton;
