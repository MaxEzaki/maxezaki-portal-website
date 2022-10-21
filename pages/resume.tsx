import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Chrono } from 'react-chrono';

const Resume: NextPage = () => {
  const items = [
    {
      title: 'Mar 2013 - Nov 2014',
      cardTitle: '株式会社MHソリューションズ',
      url: 'http://www.paraft.co.jp',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'Jan 2015',
      cardTitle: 'パラフト株式会社',
      url: 'http://www.paraft.co.jp',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
  ];
  // const route = useRouter();
  // const { data: session } = useSession();
  useLayoutEffect(() => {
    // route.push('/auth');
  });
  return (
    <>
      {
        <div>
          <h1>職歴書のページ</h1>
          <div>左カラム</div>
          <div>
            <Chrono items={items} mode="VERTICAL" />
          </div>
        </div>
      }
    </>
  );
};

export default Resume;
