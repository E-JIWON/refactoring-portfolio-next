import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// firebase 앱 초기화
const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGIN_SENDER_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);