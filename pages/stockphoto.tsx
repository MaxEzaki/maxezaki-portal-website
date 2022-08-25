import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_stockphoto.jpeg',
    alt: 'Max_Ezaki StockPhoto Model',
  },
  description: `フリー素材です`,
};

const Home: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Home;
