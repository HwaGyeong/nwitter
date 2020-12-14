import  firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig ={  
    apiKey: "AIzaSyDSpUm0qekMYuY-47pNYoX50lH7T68YgD0",
    authDomain: "nwitter-ffeea.firebaseapp.com",
    projectId: "nwitter-ffeea",
    storageBucket: "nwitter-ffeea.appspot.com",
    messagingSenderId: "1005523016673",
    appId: "1:1005523016673:web:245a1026ac9f176b6c90a0"
  };
  
   firebase.initializeApp(firebaseConfig);
   
   export const firebaseInstance = firebase;

   export const authService = firebase.auth();