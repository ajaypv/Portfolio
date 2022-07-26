
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDF79ysTTE12YBbnMB2rnOaX13G4qDaYls",
  authDomain: "portfolio-4122d.firebaseapp.com",
  projectId: "portfolio-4122d",
  storageBucket: "portfolio-4122d.appspot.com",
  messagingSenderId: "1088226720626",
  appId: "1:1088226720626:web:d4b55abfd9bf867a8c3beb",
  measurementId: "G-036QQD3DCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
