import React, { useState, useContext } from 'react';
import { auth } from '../components/firebase/firebase';
import { FirebaseContext } from '../components/firebase/context';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import logo from '../images/Logo.svg'

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { currentUser } = useContext(FirebaseContext);

  console.log(currentUser)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      // Insert/update the user document here
      await auth.currentUser.getIdTokenResult(true);
      await auth.firestore().collection('users').doc(user.uid).set(
        {
          uid: user.uid,
          email: user.email,
        },
        { merge: true }
      );
    } catch (err) {
      setError(err.message);
    }
  };



  



  return (
    
      <Box
      sx={{
        margin: 0,
        backgroundColor: '#253334',
        height: '100vh',
        paddingTop: '15vh'
      }}
    >
    <Container maxWidth="sm" >
      <Box
      component='form'
      onSubmit={handleSubmit}
        sx={{
          display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
            height: '100%',
            paddingLeft: '50px',
            paddingRight: '50px',
            
            
        }}
      >
       <img src={logo} alt="Logo" style={{ height: '150px', marginLeft: '-30px'}} />
        <Typography component="h3" variant="h3" sx={{fontFamily: 'Alegreya', color: 'white', mb: 2}}>
          Sign In
        </Typography>
        <Typography component="h7" variant="h7" sx={{fontFamily: 'Alegreya', color: 'white', mb: 5}}>
          Sign in and start journalling
        </Typography>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ width: '100%', mb: 3 }}>
            <TextField
              variant='standard'
              label='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': {
                  fontFamily: 'Alegreya', 
                  color: 'white'
                },
                width: '100%',
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white'
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'white'
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'white'
                },
              }}
            />
          </Box>
          <Box sx={{ width: '100%', mb: 3 }}>
            <TextField
              variant='standard'
              label='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': {
                  fontFamily: 'Alegreya', 
                  color: 'white'
                },
                width: '100%',
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'white'
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'white'
                },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                  borderBottomColor: 'white'
                },
              }}
            />
          </Box>
        <Button 
        type="submit" 
        fullWidth variant="contained" 
        sx={{ 
            mt: 3, 
            width: '100%', 
            fontFamily: 'Alegreya', 
            backgroundColor: '#A9D571',
            '&:hover': {
            backgroundColor: '#5C7F73',
            },
            borderRadius: '8px' 

            }}>
        <Typography variant="subtitle1" fontWeight="bold" >
            Sign In
        </Typography>
        </Button>
        </Box>

      </Box>
    </Container>
    </Box>
   
  );
};

export default SignInForm;
