import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo_max.svg"
          alt="Logo of Max_Ezaki"
          width={48}
          height={48}
        />
      </Link>
    </header>
  );
};

export default Header;
