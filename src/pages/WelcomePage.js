import React, { useContext } from 'react';
import { FirebaseContext } from '../components/firebase/context';

const WelcomePage = () => {
  const { currentUser, logout } = useContext(FirebaseContext);

  console.log(currentUser._delegate)

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;