import Link from "next/link";
import Image from "next/image";
import { css, cx } from "linaria";

const header = css`
  height: 60px;
  border-bottom: 1px solid var(--color-gray10);
  background-color: #fff;
`;

const Header = ({}) => {
  return (
    <header className={cx(header, "bg-white flex items-center justify-center")}>
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
