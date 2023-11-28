// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXFgJZr2Omc4GD72HqDd8cVqQsdnrDJoE",
  authDomain: "telegramreact.firebaseapp.com",
  projectId: "telegramreact",
  storageBucket: "telegramreact.appspot.com",
  messagingSenderId: "547639839966",
  appId: "1:547639839966:web:ecc0d689106b759245c64f",
  measurementId: "G-ES1S2LK28B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);