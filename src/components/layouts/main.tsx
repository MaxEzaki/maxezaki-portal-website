import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Main = ({ children, router }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
