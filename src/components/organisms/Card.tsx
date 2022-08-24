import Link from 'next/link';
import Image from 'next/image';
import { css } from '@linaria/core';
import colors from '../../../config/colors';

const card = css`
  width: 470px;
  border: 1px solid ${colors.gray10};
  border-radius: 8px;
  background-color: #fff;
`;

const Card = ({ children }) => {
  return (
    <div className={card}>
      <div>{children}</div>
    </div>
  );
};

export default Card;
