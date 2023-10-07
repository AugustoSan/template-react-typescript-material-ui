import React from 'react';

// import { useCustomSelector } from 'hooks/redux';
import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
// import { setAccessToken, login } from 'redux/slices/auth';
import { login } from 'redux/slices/auth';

const Home: React.FC = () => {
  const {
    auth: { accessToken, isLoading }
  } = useCustomSelector((state) => state);

  const dispatch = useCustomDispatch();

  console.log('accessToken: ', accessToken);
  console.log('isLoading: ', isLoading);

  const handleLogin = (): void => {
    // Forma 1
    // login(
    //   {
    //     email: 'eve.holt@reqres.in',
    //     password: 'cityslicka'
    //   },
    //   dispatch
    // );
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
  };

  return (
    <div>
      <p>{accessToken}</p>
      <p>{isLoading ? 'Cargando' : ''}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
