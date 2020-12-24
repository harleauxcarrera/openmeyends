import firebase from 'firebase/app'; //this is just the way to import firebase, (not actually importing from listed dir)
import 'firebase/firestore';
import 'firebase/auth';

// Config //
const config = {
    apiKey: "AIzaSyDJH-durdkrxSIqEw_6zTdZNS5QScYlat4",
    authDomain: "openmeyends.firebaseapp.com",
    projectId: "openmeyends",
    storageBucket: "openmeyends.appspot.com",
    messagingSenderId: "504687987388",
    appId: "1:504687987388:web:53ba2e7d81f55bd0679eb9",
    measurementId: "G-CX11CKLK0D"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth(); // this comes from the import 
  export const firestore = firebase.firestore();

  //google Oauth //
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'}); //
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;  