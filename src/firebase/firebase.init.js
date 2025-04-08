// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMwVC9ob-I1o6ALB_1ZttDg4Ai2l7r8Is",
  authDomain: "coffee-store-e6134.firebaseapp.com",
  projectId: "coffee-store-e6134",
  storageBucket: "coffee-store-e6134.firebasestorage.app",
  messagingSenderId: "531247625995",
  appId: "1:531247625995:web:aa7cfc73be7f785c0d140e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);