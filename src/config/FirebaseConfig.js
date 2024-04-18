
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDAnJwNcxIp3Xsn0Oe16YlARQnWX8oxLPA",
    authDomain: "sriarvindstores.firebaseapp.com",
    projectId: "sriarvindstores",
    storageBucket: "sriarvindstores.appspot.com",
    messagingSenderId: "147892555534",
    appId: "1:147892555534:web:18e6929de2bf0a1a7cd15f",
    measurementId: "G-HE9DY0HE36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
