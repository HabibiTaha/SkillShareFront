import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZ4S8nq0VLSBUedX2JPkwOnZSMPYraaRo",
  authDomain: "skillshare-c91e9.firebaseapp.com",
  projectId: "skillshare-c91e9",
  storageBucket: "skillshare-c91e9.appspot.com",
  messagingSenderId: "761636992626",
  appId: "1:761636992626:web:ba21403974c9c753e374eb",
  measurementId: "G-NFVMM6B4MY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
