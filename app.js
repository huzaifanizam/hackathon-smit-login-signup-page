import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";



    const firebaseConfig = {
        apiKey: "AIzaSyAfCpmt4Nmk5XPBrU1WTrul29i9O1vxeWw",
        authDomain: "new-project-f1845.firebaseapp.com",
        databaseURL: "https://new-project-f1845-default-rtdb.firebaseio.com",
        projectId: "new-project-f1845",
        storageBucket: "new-project-f1845.appspot.com",
        messagingSenderId: "729915941644",
        appId: "1:729915941644:web:62148eb8ed1036e1d59f29"
      };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let register = document.querySelector("#register")


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
register.addEventListener("click", ()=>{
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("user created")
    window.location.href= "./login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("successful signup")
    // ..
  });
  
})
