import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

const Resume: NextPage = () => {
  const route = useRouter();
  useLayoutEffect(() => {
    route.push('/auth');
  });
  return <>職歴書のページ</>;
};

export default Resume;
