import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className="mr-6">
          <Image
            src="/logo_max.svg"
            alt="Logo of Max_Ezaki"
            width={30}
            height={30}
          />
        </Link>
        <Link href="/interview">Interview</Link>
      </div>
    </header>
  );
};

export default Header;
