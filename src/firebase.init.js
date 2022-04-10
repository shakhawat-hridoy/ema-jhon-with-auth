// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjdMwaFocYYIoZtO6-Lh2QOXiExm_GhfM",
  authDomain: "ema-jhon-simple-e8d2b.firebaseapp.com",
  projectId: "ema-jhon-simple-e8d2b",
  storageBucket: "ema-jhon-simple-e8d2b.appspot.com",
  messagingSenderId: "247306972303",
  appId: "1:247306972303:web:4a6889dbe702f55d3d94fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
