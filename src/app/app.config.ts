import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"reclutamiento-practica-1f15e","appId":"1:908997450592:web:f48ad86b0600e314709c05","storageBucket":"reclutamiento-practica-1f15e.appspot.com","apiKey":"AIzaSyB7TUcdBp0-bSI3Qr2zHKX8WLfua_r_kDU","authDomain":"reclutamiento-practica-1f15e.firebaseapp.com","messagingSenderId":"908997450592"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
