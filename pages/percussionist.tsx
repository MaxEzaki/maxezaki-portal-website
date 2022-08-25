import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_percussionist.jpeg',
    alt: 'Max_Ezaki Teacher',
  },
  description: `<a href="https://bommer.me" target="_blank">BOMmER</a>というバンドで太鼓叩いてます。`,
};

const Home: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Home;
