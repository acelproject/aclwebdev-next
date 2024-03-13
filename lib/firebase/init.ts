// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARmtvyHi68aQOlDZSdQY3na67U9XU0sZk",
  authDomain: "eclwebdev-next.firebaseapp.com",
  projectId: "eclwebdev-next",
  storageBucket: "eclwebdev-next.appspot.com",
  messagingSenderId: "246285782291",
  appId: "1:246285782291:web:8ae1c6f468230ae6b65ee6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app