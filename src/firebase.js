import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBYuiXpen3WOQ1OZQgQ-1I-dtAq-PBBuXk',
  authDomain: 'project-r22.firebaseapp.com',
  projectId: 'project-r22',
  storageBucket: 'project-r22.appspot.com',
  messagingSenderId: '677039098705',
  appId: '1:677039098705:web:3bdabfb587f1c4aa1aa170',
};

const app = initializeApp(firebaseConfig);

export const { auth } = getAuth(app);
export const db = getFirestore(app);

export default app;
