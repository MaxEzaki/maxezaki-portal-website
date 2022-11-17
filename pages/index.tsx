import type { NextPage } from 'next';
import Card from '../src/components/Card';
import { css } from 'linaria';

const cardWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <div className={cardWrapper}>
      <Card />
    </div>
  );
};

export default Home;
