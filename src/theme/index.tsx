import React from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  StyledEngineProvider
} from '@mui/material';

import { type IPropsTheme } from 'interfaces/theme';
import { useCustomSelector } from 'hooks/redux';

const MuiThemeProvider: React.FC<IPropsTheme> = ({ children }: IPropsTheme) => {
  const { themeMode } = useCustomSelector((state) => state.settings);

  const isLight = themeMode === 'light';

  const theme = createTheme({
    palette: {
      primary: {
        main: '#651fff',
        dark: '#123456',
        light: '#Abb234'
      },
      mode: isLight ? 'light' : 'dark'
    }
  });
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;
