// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx1WwsIA7s1lphhnmm3bWroOK9DHZOvH0",
  authDomain: "proyecto-coder-3ff92.firebaseapp.com",
  projectId: "proyecto-coder-3ff92",
  storageBucket: "proyecto-coder-3ff92.appspot.com",
  messagingSenderId: "177654242702",
  appId: "1:177654242702:web:0dfb9c7366ceeed6ef98df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
    return app;
}