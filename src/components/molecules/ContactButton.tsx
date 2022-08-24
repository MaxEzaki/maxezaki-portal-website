import { css } from '@linaria/core';
import colors from '../../../config/colors';

const clickHandle = () => {
  window.open('https://form.jotform.me/Max_Ezaki/contact', '_blank');
};

const button = css`
  font-weight: bold;
  border: 1px solid ${colors.gray10};
  border-radius: 4px;
  background-color: #fff;
  padding: 0.4rem 4rem;
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    background-color: ${colors.gray10};
  }
`;

const Header = ({}) => {
  return (
    <button className={button} onClick={clickHandle}>
      Contact
    </button>
  );
};

export default Header;
