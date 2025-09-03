import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFBE0UeNXgq6kSgrv2hExiTlTrzk7_0Zk",
  authDomain: "cc-goals.firebaseapp.com",
  projectId: "cc-goals",
  storageBucket: "cc-goals.firebasestorage.app",
  messagingSenderId: "407538915592",
  appId: "1:407538915592:web:b6b4e082749c729b52f4bd",
  measurementId: "G-NB7HPTQ474"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//asfasfas
