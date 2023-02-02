import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user Auth not there
  if (!userAuth) {
    return;
  }

  // the document is creating in users doc aud id
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // if snapshot.exist is false means there is no document of above snapshot
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
