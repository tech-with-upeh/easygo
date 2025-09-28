// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn2ACQduxuqPH_1OZecn5ifQXYSRo_8nI",
  authDomain: "easygo-1cf06.firebaseapp.com",
  projectId: "easygo-1cf06",
  storageBucket: "easygo-1cf06.firebasestorage.app",
  messagingSenderId: "432451471734",
  appId: "1:432451471734:web:118b8bd8a5c7bb009b9257",
  measurementId: "G-ES70CXPT9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};