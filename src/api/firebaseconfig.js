import Firebase from 'firebase';

let config={
  apiKey: "AIzaSyB4sjKXPx9qQma_fMN5Ci2VlN6-jQOPHi0",
    authDomain: "zomatoclone-d100e.firebaseapp.com",
    projectId: "zomatoclone-d100e",
    storageBucket: "zomatoclone-d100e.appspot.com",
    messagingSenderId: "641432361256",
    appId: "1:641432361256:web:e8b7ab838bf42566d2181d",
    measurementId: "G-6V704PCGXW"
};

export default fb=Firebase.initializeApp(config);
