import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
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
const auth = getAuth(app);

const loginWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = response.user;
    await addDoc(collection(db, 'Users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
    return response;
  } catch (error) {
    return error;
  }
};

function logout() {
  signOut(auth);
}

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
