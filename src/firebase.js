import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCY7LHFedXLNDG1hfcDCreLCcQMk2uCfQ",
    authDomain: "linkedin-clone-3c6a2.firebaseapp.com",
    projectId: "linkedin-clone-3c6a2",
    storageBucket: "linkedin-clone-3c6a2.appspot.com",
    messagingSenderId: "37664216655",
    appId: "1:37664216655:web:d0000fb713ed88eecffc3a"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};