import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_index.jpeg',
    alt: 'Max_Ezaki MC',
  },
  description: `司会です`,
};

const MC: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default MC;
