
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0CYHfwFlRAeff_U2wVXULrgHGrgpFqr4",
  authDomain: "fruits-warehouse-595b0.firebaseapp.com",
  projectId: "fruits-warehouse-595b0",
  storageBucket: "fruits-warehouse-595b0.appspot.com",
  messagingSenderId: "930005593226",
  appId: "1:930005593226:web:f30e86da5b92be346b1173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;






