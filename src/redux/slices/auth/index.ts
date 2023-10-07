import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type AuthState } from 'interfaces/authInterfaces';

const initialState: AuthState = {
  accessToken: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    }
  }
});

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
