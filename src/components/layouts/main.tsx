import Header from "../Header";
import Footer from "../Footer";
import { css, cx } from "linaria";

const wrapper = css`
  width: 100%;
  min-height: 100vh;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  overflow: hidden;
`;

const main = css`
  flex: 1;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const Main = ({ children, router }: any) => {
  return (
    <div className={cx(wrapper, "flex flex-col justify-between")}>
      <Header />
      <main className={cx(main, "flex flex-1 items-center justify-center")}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
