

import React from 'react';
import { AuthProvider } from './src/components/firebase/context'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './src/styles/theme';

export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>

    </AuthProvider>
  )
};

