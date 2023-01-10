import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "auth-dev-f41ad.firebaseapp.com",
  projectId: "auth-dev-f41ad",
  storageBucket: "auth-dev-f41ad.appspot.com",
  messagingSenderId: "1074509781302",
  appId: "1:1074509781302:web:a894a210044616f4e23b97",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
