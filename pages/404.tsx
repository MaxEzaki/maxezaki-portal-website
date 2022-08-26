import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: '404 Not Found!!',
  image: {
    src: '/max_404.jpeg',
    alt: '404 Not Found',
  },
  description: `お探しのページはありませんね。お好きなハッシュタグをクリックしてみてね！`,
};

const Home: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Home;
