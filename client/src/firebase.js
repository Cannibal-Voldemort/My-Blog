// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-a44f9.firebaseapp.com",
  projectId: "blog-app-a44f9",
  storageBucket: "blog-app-a44f9.appspot.com",
  messagingSenderId: "827661604014",
  appId: "1:827661604014:web:0afad7b100617723c2493f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
