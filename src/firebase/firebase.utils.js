import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUdUFrUCfgAJ-g-gxn7Lu1uiK4U1yJwiU",
  authDomain: "triumph-clothing-91fb6.firebaseapp.com",
  databaseURL: "https://triumph-clothing-91fb6.firebaseio.com",
  projectId: "triumph-clothing-91fb6",
  storageBucket: "triumph-clothing-91fb6.appspot.com",
  messagingSenderId: "247343816412",
  appId: "1:247343816412:web:9d944a1518c8435f051e19",
  measurementId: "G-8W38VRBEX5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
