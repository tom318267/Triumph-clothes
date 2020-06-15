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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
