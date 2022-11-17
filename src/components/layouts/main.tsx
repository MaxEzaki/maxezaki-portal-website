import Header from '../Header';
import Footer from '../Footer';
import { css } from 'linaria';

const wrapper = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const main = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = ({ children, router }: any) => {
  return (
    <div className={wrapper}>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
