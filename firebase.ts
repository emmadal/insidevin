// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmXHdsrDnwl_V8VCCTwVezmYRRzroBr4M",
  authDomain: "insidevin-8b3d5.firebaseapp.com",
  projectId: "insidevin-8b3d5",
  storageBucket: "insidevin-8b3d5.appspot.com",
  messagingSenderId: "837072878859",
  appId: "1:837072878859:web:cb520f47534789c5d0b60e",
  measurementId: "G-SX4SF43SQR",
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
