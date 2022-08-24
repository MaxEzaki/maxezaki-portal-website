import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_index.jpeg',
    alt: 'Max_Ezaki Index',
  },
  description: `マックスさんです。\n 好きな食べ物はビールです。`,
};

const Home: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Home;
