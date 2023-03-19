import React from 'react';
import SignInForm from '../components/SignInForm';
import { Box } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
    sx={{
      
      backgroundColor: '#253334',
      height: '100vh'
    }}
  >
      <SignInForm />
    </Box>
  );
};

export default LoginPage;
