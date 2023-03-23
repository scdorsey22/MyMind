import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../components/firebase/context';
import firebase from '../components/firebase/firebase';

const WelcomePage = () => {
  const { currentUser, logout } = useContext(FirebaseContext);
  const [entries, setEntries] = useState([]);
  const [userData, setUserData] = useState(null); // Add a state variable to store user data

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userDoc = await firebase
          .firestore()
          .collection('users')
          .doc(currentUser.uid)
          .get();

        setUserData(userDoc.data());
      }
    };

    fetchUserData();
  }, [currentUser]);

  console.log(userData)

  useEffect(() => {
    const fetchEntries = async () => {
      const userId = firebase.auth().currentUser._delegate.uid;
      const snapshot = await firebase
        .firestore()
        .collection('entries')
        .where('userId', '==', userId)
        .get();
  
      const userEntries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setEntries(userEntries);
    };
  
    fetchEntries();
  }, []);

  console.log(entries)

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