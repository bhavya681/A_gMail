import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { PiGoggles } from "react-icons/pi";

const firebaseConfig = {
  apiKey: "AIzaSyDSUZe3SWZKnkZ8FmP0Ga5yEo2iwka_Z2c",
  authDomain: "clone-2401f.firebaseapp.com",
  projectId: "clone-2401f",
  storageBucket: "clone-2401f.appspot.com",
  messagingSenderId: "407380001955",
  appId: "1:407380001955:web:284dac29b5a27d243aab16",
  measurementId: "G-9WS0VZT7HJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export const storage=getFirestore(app);
export const provider=new GoogleAuthProvider();