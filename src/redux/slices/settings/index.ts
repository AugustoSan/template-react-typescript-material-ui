import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type ISettingsState } from 'interfaces/settingsInterface';

const initialState: ISettingsState = {
  themeMode: 'light'
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    }
  }
});

export const { setThemeMode } = settingsSlice.actions;

export default settingsSlice.reducer;
