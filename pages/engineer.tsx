import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_engineer.jpeg',
    alt: 'Max_Ezaki Engineer',
  },
  description: `一応ITエンジニアやってます。PHP, Vue, Typescript あたりでしょうか。React はお触り中です。`,
};

const Engineer: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Engineer;
