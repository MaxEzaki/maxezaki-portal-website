import { css, cx } from "linaria";

const clickHandle = () => {
  window.open("https://form.jotform.me/Max_Ezaki/contact", "_blank");
};

const button = css`
  border: 1px solid var(--color-gray10);
  background-color: #fff;
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    background-color: var(--color-gray10);
  }
`;

const Header = ({}) => {
  return (
    <button
      className={cx(button, "rounded py-2 px-16 font-bold")}
      onClick={clickHandle}
    >
      Contact
    </button>
  );
};

export default Header;
