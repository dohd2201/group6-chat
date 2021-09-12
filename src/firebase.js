import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyA3V1q5Y5fIyZcWvEJ68DlhofTh36yyGZI",
    authDomain: "group6-chat.firebaseapp.com",
    projectId: "group6-chat",
    storageBucket: "group6-chat.appspot.com",
    messagingSenderId: "812853328253",
    appId: "1:812853328253:web:ac0abbebf7f42b85d3b414",
  })
  .auth();
