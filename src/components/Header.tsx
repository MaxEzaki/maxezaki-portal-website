import Link from "next/link";
import Image from "next/image";
import { css, cx } from "linaria";

const header = css`
  height: 60px;
  border-bottom: 1px solid var(--color-gray10);
  background-color: #fff;
  display: flex;
`;
const inner = css`
  width: 470px;
  margin: 0 auto;
`;

const Header = ({}) => {
  return (
    <header className={cx(header, "bg-white")}>
      <div className={cx(inner, " flex items-center justify-start")}>
        <Link href="/">
          <a className="mr-6">
            <Image
              src="/logo_max.svg"
              alt="Logo of Max_Ezaki"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href="/interview">Interview</Link>
      </div>
    </header>
  );
};

export default Header;
