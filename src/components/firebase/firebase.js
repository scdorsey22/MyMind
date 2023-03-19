import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeZYlqTUohUI-BpZozI4mxRSLt4PdrOwY",
  authDomain: "mymind-21144.firebaseapp.com",
  projectId: "mymind-21144",
  storageBucket: "mymind-21144.appspot.com",
  messagingSenderId: "942489697032",
  appId: "1:942489697032:web:ba60c68e0af31405e38abd"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
