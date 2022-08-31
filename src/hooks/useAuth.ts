import { useState } from 'react';

const useAuth = () => {
  const [auth, useAuth] = useState('');

  return {
    auth,
    useAuth,
  };
};

export default useAuth;
