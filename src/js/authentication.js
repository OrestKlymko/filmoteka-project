import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const authBtn = document.querySelector('#firebaseui-auth-container')

const firebaseConfig = {
  apiKey: 'AIzaSyAJniPEYyCpEkvhjqmDN6oMVrV91NEI50k',
  authDomain: 'filmoteka-5b686.firebaseapp.com',
  projectId: 'filmoteka-5b686',
  storageBucket: 'filmoteka-5b686.appspot.com',
  messagingSenderId: '751637418950',
  appId: '1:751637418950:web:7207f05e032c39a423d8c7',
  measurementId: 'G-W09L62RFSC',
};

firebase.initializeApp(firebaseConfig);

// Отримання доступу до Firebase Auth
const auth = firebase.auth();

// Створення нового інстансу FirebaseUI
const ui = new firebaseui.auth.AuthUI(auth);

// Налаштування FirebaseUI, щоб він використовував авторизацію через Google
const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

// Відображення FirebaseUI на екрані
ui.start('#firebaseui-auth-container', uiConfig);

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const user = firebase.auth().onAuthStateChanged(user => {
   return user
});
// console.log(user);


firebase.auth().onAuthStateChanged(user => {   
  if (user) {
    // Користувач авторизований
    authBtn.classList.add('hide')
    document.querySelector('.menu__link__library').classList.remove('hide');
  } else {
    // Користувач не авторизований
    document.querySelector('.menu__link__library').classList.add('hide');
  }
});