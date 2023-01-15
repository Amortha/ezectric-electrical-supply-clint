// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO-hdOAfb_qykTyGg6QzFvxtcNrBfanq4",
  authDomain: "ezectric-electrical-supply.firebaseapp.com",
  projectId: "ezectric-electrical-supply",
  storageBucket: "ezectric-electrical-supply.appspot.com",
  messagingSenderId: "823783947709",
  appId: "1:823783947709:web:bf18c1f067b4463c05e6d4"

  
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
 export default auth ;