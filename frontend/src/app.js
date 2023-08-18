import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyBb_GPkW2Ci5wkYYjeb-yiQSkAOavABZI4',
  authDomain: 'gameshowtool.firebaseapp.com',
  projectId: 'gameshowtool',
  storageBucket: 'gameshowtool.appspot.com',
  messagingSenderId: '662463714072',
  appId: '1:662463714072:web:6dc5fbf72efa4fd9e8046d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const loginBtn = document.getElementById('login');
if (loginBtn) {
  loginBtn.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('mail').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User logged in successfully
        const user = userCredential.user;
        console.log(user, 'logged in successfully');
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  });
}

const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('logged out successfully');
        window.location = 'index.html';
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  });
}

// const questionBtn = document.getElementById('getQuestion');
// const question = document.getElementById('question');
// questionBtn.addEventListener('click', () => {
//   // fetch data from backend
//   const quetsionRes = fetch('http://localhost:3000/api/multiple-choice/', {
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       question.innerHTML = data[0].question;
//     });
// });

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location = 'protected.html'; //After successful login, user will be redirected to home.html
  } else {
    console.log('user is not logged in.');
    // window.location = 'index.html';
  }
});
