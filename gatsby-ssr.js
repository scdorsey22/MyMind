
import React from 'react';
import { AuthProvider } from './src/components/firebase/context';

export const wrapRootElement = ({ element }) => {
  return <AuthProvider>{element}</AuthProvider>;
};
