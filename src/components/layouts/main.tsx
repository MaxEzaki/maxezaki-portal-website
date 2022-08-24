import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import { css } from '@linaria/core';
const wrapper = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;
const Main = ({ children, router }) => {
  return (
    <div className={wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
