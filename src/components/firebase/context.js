import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import { navigate } from 'gatsby';

export const FirebaseContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      if(user) {
        navigate("/WelcomePage")
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <FirebaseContext.Provider value={{ currentUser, logout }}>
      {children}
    </FirebaseContext.Provider>
  );
};
