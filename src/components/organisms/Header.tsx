import Link from 'next/link';
import Image from 'next/image';
import { css } from '@linaria/core';
import colors from '../../../config/colors';

const headerColor = {
  borderBottom: colors.gray10,
};

const header = css`
  height: 65px;
  border-bottom: 1px solid ${headerColor.borderBottom};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Header = ({}) => {
  return (
    <header className={header}>
      <Link href="/">
        <a>
          <Image
            src="/logo_max.svg"
            alt="Logo of Max_Ezaki"
            width={48}
            height={48}
          />
        </a>
      </Link>
    </header>
  );
};

export default Header;
