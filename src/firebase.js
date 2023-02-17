/* istanbul ignore file */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBRRKioKCgUWaUJ0sUZ5kIXfn6hrPekvu0',
  authDomain: 'rolling-benefits.firebaseapp.com',
  projectId: 'rolling-benefits',
  storageBucket: 'rolling-benefits.appspot.com',
  messagingSenderId: '727875119103',
  appId: '1:727875119103:web:4eac97fa87e18f790b29ca',
};

const app = initializeApp(firebaseConfig);

export const { auth } = getAuth(app);
export const db = getFirestore(app);

export default app;
