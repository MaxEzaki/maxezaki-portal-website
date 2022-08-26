import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_stockphoto.jpeg',
    alt: 'Max_Ezaki StockPhoto Model',
  },
  description: `<a href="https://www.pakutaso.com/Max_Ezaki.html" target="_blank">ぱくたそ</a>という日本一のフリー素材サイトでフリー素材モデルやってます。使ってくれたら喜びます。`,
};

const StockPhoto: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default StockPhoto;
