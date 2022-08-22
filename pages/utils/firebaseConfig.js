// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDwFI7LoVSHOjNKY6qNv6nrszrYcEu5JzY',
  authDomain: 'tutoring-courses.firebaseapp.com',
  projectId: 'tutoring-courses',
  storageBucket: 'tutoring-courses.appspot.com',
  messagingSenderId: '278806901026',
  appId: '1:278806901026:web:d370e9d3ee900e8a70357b',
  measurementId: 'G-9VLK2TDLF2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export default db;
