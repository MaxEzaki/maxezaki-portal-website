import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { FaGithub } from "react-icons/fa";

const navLinks = [
  { href: "/interview", label: "Interview", icon: null },
  { href: "/movie", label: "Movie", icon: null },
  {
    href: "https://github.com/MaxEzaki/maxezaki-portal-website",
    label: "Source",
    icon: <FaGithub size={"1em"} title={"github"} className="mr-1" />,
  },
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
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center justify-center hover:underline"
            target={link.icon ? "_blank" : undefined}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
