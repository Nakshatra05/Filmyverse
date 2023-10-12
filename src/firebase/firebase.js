import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "filmy-4e1c5.firebaseapp.com",
  projectId: "filmy-4e1c5",
  storageBucket: "filmy-4e1c5.appspot.com",
  messagingSenderId: "206563926562",
  appId: "1:206563926562:web:cb0f036f3426455472e07b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;