// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCraqXGZ9re3tpmKBkZBA4jHlZq0kxBZPM",
  authDomain: "general-2f04c.firebaseapp.com",
  projectId: "general-2f04c",
  storageBucket: "general-2f04c.appspot.com",
  messagingSenderId: "883616345028",
  appId: "1:883616345028:web:7f34c997bdb71e471c9291",
  measurementId: "G-9RT2M30MZK"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export default firebaseApp;


