// const firebaseConfig = {
//     apiKey: "AIzaSyBP_enJuXumqo5SoXHxYi1uS7n3KaYwGo8",
//     authDomain: "poimaruapp.firebaseapp.com",
//     databaseURL: "https://poimaruapp-default-rtdb.firebaseio.com",
//     projectId: "poimaruapp",
//     storageBucket: "poimaruapp.appspot.com",
//     messagingSenderId: "409133139197",
//     appId: "1:409133139197:web:f8f5440bb44c6bf0ebaa94",
//     measurementId: "G-PKJ70BRLFS"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA_HPZxAjoN-5ckx07N2vHBj0tIy1oQEoQ",
  authDomain: "test-data-5301f.firebaseapp.com",
  projectId: "test-data-5301f",
  storageBucket: "test-data-5301f.appspot.com",
  messagingSenderId: "808132503376",
  appId: "1:808132503376:web:1674bdbd7fde8cc8f46e55",
  measurementId: "G-6VSBP3GP39"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();