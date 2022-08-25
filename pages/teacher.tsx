import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_teacher.jpeg',
    alt: 'Max_Ezaki Teacher',
  },
  description: `中学生メインで数学と理科を教えてました（英語ではない）。集団、個別どちらも対応可能。最後はイギリスで教えてました。`,
};

const Teacher: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Teacher;
