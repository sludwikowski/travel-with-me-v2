import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_MY_VAR_FIREBASE_APP_KEY,
  authDomain: import.meta.env.VITE_MY_VAR_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_MY_VAR_FIREBASE_URL,
  projectId: import.meta.env.VITE_MY_VAR_PROJECT_ID,
  storageBucket: import.meta.env.VITE_MY_VAR_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MY_VAR_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_MY_VAR_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

export const signInWithFirebaseSDK = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
export const signOutWithFirebaseSDK = () => signOut(auth);
