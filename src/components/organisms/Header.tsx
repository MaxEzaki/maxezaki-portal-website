import Image from 'next/image';
import { css } from '@linaria/core';

const header = css`
  height: 65px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Header = ({}) => {
  return (
    <header className={header}>
      <Image
        src="/logo_max.svg"
        alt="Logo of Max_Ezaki"
        width={48}
        height={48}
      />
    </header>
  );
};

export default Header;
