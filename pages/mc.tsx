import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_index.jpeg',
    alt: 'Max_Ezaki MC',
  },
  description: `イベント司会、結婚式司会（日英含む）などたまにやってます。台本は必須アイテム。`,
};

const MC: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default MC;
