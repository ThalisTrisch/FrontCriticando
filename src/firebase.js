import {initializeApp} from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD4GesdmOCxdNTxrApdvvQT1SAW3ch2R2k",
  authDomain: "criticandoproject.firebaseapp.com",
  projectId: "criticandoproject",
  storageBucket: "criticandoproject.appspot.com",
  messagingSenderId: "926981313237",
  appId: "1:926981313237:web:7c2fff84b12195a5cd085c"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app);