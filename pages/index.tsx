import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../src/components/organisms/Card';
import { css } from '@linaria/core';
import colors from '../config/colors';
import { parseISO, format } from 'date-fns';
import ContactButton from '../src/components/molecules/ContactButton';

const clickHandle = () => {
  window.open('https://form.jotform.me/Max_Ezaki/contact', '_blank');
};

const imageWrap = css`
  border-top: 1px solid ${colors.gray10};
  border-bottom: 1px solid ${colors.gray10};
  margin-bottom: 1rem;
`;

const name = css`
  font-size: 1.3rem;
  padding-left: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;

const content = css`
  padding-left: 1rem;
  border-bottom: 1px solid ${colors.gray10};
`;

const description = css`
  padding-bottom: 0.3rem;
`;

const tags = {
  wrapper: css`
    color: ${colors.blue};
    display: flex;
    padding-bottom: 1rem;
  `,
  text: css`
    margin-right: 0.6rem;
    transition: all 0.4s;
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  `,
};

const time = css`
  color: ${colors.gray40};
  font-size: 0.8rem;
  padding-bottom: 1rem;
`;

const buttonWrapper = css`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const hashtags = [
  {
    id: 1,
    name: 'フリー素材',
  },
  {
    id: 2,
    name: '司会',
  },
  {
    id: 3,
    name: 'ITエンジニア',
  },
  {
    id: 4,
    name: '塾講師',
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Card>
        <p className={name}>Max_Ezaki</p>
        <div className={imageWrap}>
          <Image
            src="/max_index.jpeg"
            alt="Max_Ezaki Index"
            layout="responsive"
            width={470}
            height={365}
          />
        </div>
        <div className={content}>
          <p className={description}>
            マックスさんです。 <br />
            好きな食べ物はビールです。
          </p>
          <div className={tags.wrapper}>
            {hashtags.map((e) => {
              return (
                <p className={tags.text} key={e.id}>
                  #{e.name}
                </p>
              );
            })}
          </div>
          <p className={time}>{format(new Date(), 'yyyy/MM/dd HH:mm')}</p>
        </div>
        <div className={buttonWrapper}>
          <ContactButton />
        </div>
      </Card>
    </>
  );
};

export default Home;
