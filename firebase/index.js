import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth';

// Replace this with your Firebase SD dK config snippet
const firebaseConfig = {
    apiKey: "AIzaSyDx9f_iIwwM5wouSTT3QntFlwHcbNEqirA",
    authDomain: "conectado-33186.firebaseapp.com",
    projectId: "conectado-33186",
    storageBucket: "conectado-33186.appspot.com",
    messagingSenderId: "239868035366",
    appId: "1:239868035366:web:f96955df520923550481e7",
    measurementId: "G-6129VH8LXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };