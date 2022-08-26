import type { NextPage } from 'next';
import Card from '../src/components/organisms/Card';

const character = {
  name: 'Max_Ezaki',
  image: {
    src: '/max_actor.jpeg',
    alt: 'Max_Ezaki Actor',
  },
  description: `動画もいけます。下記よりご視聴ください。
  - <a href="https://vimeo.com/466401103" target="_blank">トレーラームービー</a>
  - <a href="https://vimeo.com/466400923" target="_blank">動画広告</a>
  - <a href="https://vimeo.com/466400672" target="_blank">【ドクターシーラボ公式】商品紹介</a>
  <a href="https://soundcloud.com/max-ezaki/sets/voice-sample-from-trailer-movie-remind?si=9a77e471d4bc4c77ae56485e12b9a471&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" target="_blank">ボイスサンプル</a>もあります`,
};

const Home: NextPage = () => {
  return (
    <>
      <Card character={character} />
    </>
  );
};

export default Home;
