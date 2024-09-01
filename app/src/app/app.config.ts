import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        // this comes from `ng add @angular/fire`
        // or the web project in the Firebase Console
        projectId: 'firestore-poc-434301',
        appId: '1:11108787929:web:0d844df60cec4e2f1e80c8',
        storageBucket: 'firestore-poc-434301.appspot.com',
        apiKey: 'AIzaSyCCDNvIxKc41BU6yV79rMd8STYicfqRNPE',
        authDomain: 'firestore-poc-434301.firebaseapp.com',
        messagingSenderId: '11108787929',
      }),
    ),
    provideFirestore(() => getFirestore()),
  ],
};
