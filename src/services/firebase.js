// firebase.js: Firebase 서비스를 초기화하고 인증 및 데이터베이스 인스턴스를 제공합니다.
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from'firebase/firestore'

const{
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID,
    VITE_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
apiKey: VITE_FIREBASE_API_KEY,
authDomain: VITE_FIREBASE_AUTH_DOMAIN,
projectId: VITE_FIREBASE_PROJECT_ID,
storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
appId: VITE_FIREBASE_APP_ID,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Auth 및 Firestore 인스턴스를 내보냅니다.

export const auth = getAuth(app);
export const db = getFirestore(app);
