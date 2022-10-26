import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Chrono } from 'react-chrono';
import { css } from 'linaria';
import Image from 'next/image';
import ContactButton from 'components/molecules/ContactButton';
import { skills } from 'data/skills';

const widthLeft = '20%';

const resume = {
  wrapper: {
    columns: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    columnLeft: css`
      background-color: #414141;
      width: ${widthLeft};
      padding: 2em;
      color: white;
      /* height: calc(100vh - 65px - 130px); // ヘッダーとフッターの高さを引いた */
    `,
    columnRight: css`
      width: calc(100% - ${widthLeft});
      padding-left: 2em;
      padding-right: 2em;
      height: calc(100vh - 65px - 84px);
      > div:first-child {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        flex-flow: column;
        /* border-bottom: 1px solid #41414174; */
        padding-bottom: 2.2em;
        padding-top: 4em;
        h1 {
          font-size: 3.4em;
          margin-bottom: 0.8em;
        }
      }
      > div:nth-child(2) {
        /* padding-top: 3em; */
        h2 {
          position: relative;
          margin-bottom: 0.4em;
          padding-bottom: 0.2em;
          &::before {
            position: absolute;
            bottom: 0;
            content: '';
            width: 100%;
            border-bottom: 1px solid #41414174;
          }
        }
      }
    `,
    content: css`
      margin-bottom: 2em;
    `,
    h2: css`
      position: relative;
      margin-bottom: 0.4em;
      padding-bottom: 0.2em;
      &::before {
        position: absolute;
        bottom: 0;
        content: '';
        width: 100%;
        border-bottom: 2px solid white;
      }
    `,
  },
  image: css`
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
  `,
  avatar: css`
    border-radius: 50%;
    border: 1px solid black;
    margin: 0 auto;
  `,
};

const lists = {
  group: css`
    padding-left: 20px;
    > li {
      padding-bottom: 0.2em;
    }
  `,
};

const Resume: NextPage = () => {
  useLayoutEffect(() => {
    // route.push('/auth');
  });
  return (
    <>
      <div className={resume.wrapper.columns}>
        <div className={resume.wrapper.columnLeft}>
          <p className={resume.image}>
            <Image
              src={'/max_avator.jpeg'}
              alt={'max_avator'}
              width="200"
              height="200"
              loading="eager"
              className={resume.avatar}
            ></Image>
          </p>
          <div>
            <div className={resume.wrapper.content}>
              <h2 className={resume.wrapper.h2}>Language</h2>
              <div>
                <ul className={lists.group}>
                  <li>Japanese</li>
                  <li>English</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className={resume.wrapper.h2}>Skills</h2>
              <div>
                <ul className={lists.group}>
                  {skills.map((e, index) => (
                    <li key={index}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={resume.wrapper.columnRight}>
          <div>
            <h1>Max_Ezaki</h1>
            <div>
              <ContactButton />
            </div>
          </div>
          <div>
            <h2>Experience</h2>
            Comming soon...
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
