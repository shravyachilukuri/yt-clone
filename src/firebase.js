import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcvg5aN7FsEtQoahx15mI8ODPaHt0wAxs",
    authDomain: "clone-project-1.firebaseapp.com",
    projectId: "clone-project-1",
    storageBucket: "clone-project-1.appspot.com",
    messagingSenderId: "513399599201",
    appId: "1:513399599201:web:8515803cab51a5bc13ba20"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth();