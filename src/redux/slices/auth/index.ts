import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AxiosResponse, type AxiosError } from 'axios';

import { type IAuthState, type ILogin } from 'interfaces/authInterfaces';
import { type Thunk } from 'redux/store';
// import { type Thunk, type AppDispatch } from 'redux/store';
import axiosIntance from 'utils/axios';

const initialState: IAuthState = {
  accessToken: null,
  isLoading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setAccessToken, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

// Forma 1 de crear las Promesas
// export const login = async (
//   data: ILogin,
//   dispatch: AppDispatch
// ): Promise<AxiosResponse | AxiosError> => {
//   try {
//     const response: AxiosResponse = await axiosIntance.post('/login', data);
//     dispatch(setAccessToken(response.data.token));
//     return response;
//   } catch (error) {
//     return error as AxiosError;
//   }
// };

export const login =
  (data: ILogin): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axiosIntance.post('/login', data);
      dispatch(setAccessToken(response.data.token));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
