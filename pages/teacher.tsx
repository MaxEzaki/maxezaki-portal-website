import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_teacher.jpeg',
    alt: 'Max_Ezaki Teacher',
  },
  description: `塾講師やってました`,
};

const Teacher: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Teacher;
