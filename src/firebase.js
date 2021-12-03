import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB43wN-GAvN1Q1UpCfCSIHZa9ThTy-OUnU",
  authDomain: "friends-app-7aec9.firebaseapp.com",
  projectId: "friends-app-7aec9",
  storageBucket: "friends-app-7aec9.appspot.com",
  messagingSenderId: "216160654136",
  appId: "1:216160654136:web:6d665f525c33ca316227cd",
  measurementId: "G-XP2QNNNV9E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const database = getFirestore(app)
export const auth = getAuth(app);
export {db};