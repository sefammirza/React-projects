import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBN-YN6mPR9HS5Ph2lPvwbI1ETibsUgYkY",
    authDomain: "movie-app-1-80047.firebaseapp.com",
    projectId: "movie-app-1-80047",
    storageBucket: "movie-app-1-80047.appspot.com",
    messagingSenderId: "484727864206",
    appId: "1:484727864206:web:1f8734962542faa16342df"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);