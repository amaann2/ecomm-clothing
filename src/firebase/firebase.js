import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBNC3Ealkufca4__ehqwfD5-XgCZVBJn7w",
  authDomain: "crwn-db-ff6d6.firebaseapp.com",
  projectId: "crwn-db-ff6d6",
  storageBucket: "crwn-db-ff6d6.appspot.com",
  messagingSenderId: "769594485177",
  appId: "1:769594485177:web:d2a8f33879d2ad1f8cae68",
  measurementId: "G-WV98CZJXDZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
