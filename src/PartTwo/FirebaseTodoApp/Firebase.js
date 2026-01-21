import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBZ59eWEX_9EcfhVZxb0dvR78Jxykz8arM',
  authDomain: 'todo-app-4c20b.firebaseapp.com',
  projectId: 'todo-app-4c20b',
  storageBucket: 'todo-app-4c20b.firebasestorage.app',
  messagingSenderId: '44965244629',
  appId: '1:44965244629:web:686c924833884d55723c5c',
  measurementId: 'G-327NHDEH1T',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
