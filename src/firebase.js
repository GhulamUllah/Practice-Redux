// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXEQ_L4H_wz7_TxqpN14i0sf0z5mHwuO0",
  authDomain: "redux-app-51384.firebaseapp.com",
  projectId: "redux-app-51384",
  storageBucket: "redux-app-51384.appspot.com",
  messagingSenderId: "239801841977",
  appId: "1:239801841977:web:86947d94445147222610e8",
  measurementId: "G-CTBZWK09E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
