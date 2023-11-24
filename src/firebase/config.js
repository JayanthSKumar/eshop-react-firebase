import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "eshop-a9fb4.firebaseapp.com",
  projectId: "eshop-a9fb4",
  storageBucket: "eshop-a9fb4.appspot.com",
  messagingSenderId: "664648304494",
  appId: "1:664648304494:web:25d4ed4287f998032ba37f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;