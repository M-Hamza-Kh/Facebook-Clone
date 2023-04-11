// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDzMDmXKJsIl_ZkGLwllkyQo3--h7hrgpo",
  authDomain: "facebook-clone-50bf9.firebaseapp.com",
  projectId: "facebook-clone-50bf9",
  storageBucket: "facebook-clone-50bf9.appspot.com",
  messagingSenderId: "535831336",
  appId: "1:535831336:web:b4a0b291d3245a86c6261d",
  measurementId: "G-KWBPE5NRX4",
};
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
