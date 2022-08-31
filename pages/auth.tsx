import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import useAuth from '@/hooks/useAuth';

type AuthType = {
  authId: string;
  authPw: string;
};

const Auth: NextPage = () => {
  const route = useRouter();
  const [auth, setAuth] = useState('login');
  const { register, handleSubmit } = useForm<AuthType>();
  const checkAuth: SubmitHandler<AuthType> = (data) => {
    if (
      process.env.NEXT_PUBLIC_AUTH_ID !== data.authId ||
      process.env.NEXT_PUBLIC_AUTH_PW !== data.authPw
    ) {
      alert('間違ってます');
      return;
    }
    console.log('認証通ったよ');
    setAuth('login');
    route.push('/resume');
  };
  return (
    <form onSubmit={handleSubmit(checkAuth)}>
      <input type="text" {...register('authId')} />
      <input type="password" {...register('authPw')} />
      <button type="submit">認証する</button>
    </form>
  );
};

export default Auth;

// サーバー側で実行
// export const getStaticProps: GetStaticProps = async () => {
//   console.log('あああああ');
//   console.log(process.env.NEXT_PUBLIC_AUTH_ID, process.env.NEXT_PUBLIC_AUTH_PW);
// };
