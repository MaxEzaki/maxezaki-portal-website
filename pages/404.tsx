import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';
import { css } from 'linaria';

const cardWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <div className={cardWrapper}>
      <Card type="404" />
    </div>
  );
};

export default Home;
