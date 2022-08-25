import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_engineer.jpeg',
    alt: 'Max_Ezaki Engineer',
  },
  description: `エンジニアさんです`,
};

const Home: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Home;
