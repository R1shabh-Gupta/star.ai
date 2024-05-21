// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9EkPpWMG4yiR5-z99vKu91fyWT5VIMgQ",
  authDomain: "starai-d7030.firebaseapp.com",
  projectId: "starai-d7030",
  storageBucket: "starai-d7030.appspot.com",
  messagingSenderId: "477604852460",
  appId: "1:477604852460:web:00ef4a064b85072bcb2bc9",
  measurementId: "G-FQPF50ZWRF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
