import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA7mvvJd-qm3Z_NeMDY9R_VOVhrkyTAYCA",
  authDomain: "gappy-server.firebaseapp.com",
  projectId: "gappy-server",
  storageBucket: "gappy-server.appspot.com",
  messagingSenderId: "212474184506",
  appId: "1:212474184506:web:6ac3af9c3ea4d196f0c603",
  measurementId: "G-QY59MEHG5B"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;