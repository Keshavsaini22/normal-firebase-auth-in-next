"use client";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_apiKey!,
    authDomain: process.env.NEXT_PUBLIC_authDomain!,
    projectId: process.env.NEXT_PUBLIC_projectId!,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket!,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId!,
    appId: process.env.NEXT_PUBLIC_appId!,
};
const getfirebaseConfig = () => {

}
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export default app;