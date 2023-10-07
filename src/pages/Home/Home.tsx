import React from 'react';

import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
import { setAccessToken } from 'redux/slices/auth';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);

  const dispatch = useCustomDispatch();

  console.log('auth: ', auth.accessToken);

  const handleLogin = (): void => {
    dispatch(setAccessToken('jhbkjbkhjbkjhbk'));
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
