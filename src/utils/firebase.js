import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwY7mXX5l9gKZIa04b2qR50X_8M7EYf-Y",
  authDomain: "casablanca-native.firebaseapp.com",
  projectId: "casablanca-native",
  storageBucket: "casablanca-native.appspot.com",
  messagingSenderId: "126928875359",
  appId: "1:126928875359:web:c6f477251041f09b4b90ea",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
