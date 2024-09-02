import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { serviceAccountKey } from './key.js';

const firestore = getFirestore(
  initializeApp({
    credential: cert(serviceAccountKey),
    projectId: 'firestore-poc-434301',
    databaseURL: 'https://firebase-poc.firebaseio.com',
  }),
);

export const userCollection = firestore.collection('users');

// Real-time listener for the 'users' collection
userCollection.onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log('New user:', change.doc.data().name);
    }
    if (change.type === 'modified') {
      console.log('Modified user:', change.doc.data().name);
    }
    if (change.type === 'removed') {
      console.log('Removed user:', change.doc.data().name);
    }
  });
});
