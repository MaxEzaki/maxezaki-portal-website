import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useContext, useState } from 'react';
import useAuth from '@/hooks/useAuth';
// import { getCsrfToken, signIn } from 'next-auth/react';
// import { getCsrfToken, useSession, signOut } from 'next-auth/react';

import { supabase } from '../libs/supabaseClient';

type AuthType = {
  authId: string;
  authPw: string;
};

const Auth: NextPage = () => {
  const route = useRouter();
  const { error } = useRouter().query;
  // const { data: session } = useSession();
  const { register, handleSubmit } = useForm<AuthType>();
  const checkAuth: SubmitHandler<AuthType> = async (inputData) => {
    console.log('あああああ');
    console.log(inputData);
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email: inputData.authId,
    //   password: inputData.authPw,
    // });
    if (error) {
      alert('やり直してね');
    }
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
