import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

const navLinks = [
  { href: "/interview", label: "Interview" },
  { href: "/movie", label: "Movie" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/">
          <Image
            src="/logo_max.svg"
            alt="Logo of Max_Ezaki"
            width={30}
            height={30}
          />
        </Link>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
