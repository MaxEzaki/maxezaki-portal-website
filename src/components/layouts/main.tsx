import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Image from 'next/image';
import { css } from '@linaria/core';

const wrapper = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const main = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = (children: any) => {
  return (
    <div className={wrapper}>
      <Header />
      <main className={main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Main;
