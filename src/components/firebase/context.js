import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase';

export const FirebaseContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <FirebaseContext.Provider value={{ currentUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};
