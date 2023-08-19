import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword , signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAfCpmt4Nmk5XPBrU1WTrul29i9O1vxeWw",
    authDomain: "new-project-f1845.firebaseapp.com",
    databaseURL: "https://new-project-f1845-default-rtdb.firebaseio.com",
    projectId: "new-project-f1845",
    storageBucket: "new-project-f1845.appspot.com",
    messagingSenderId: "729915941644",
    appId: "1:729915941644:web:62148eb8ed1036e1d59f29"
  };
  const app = initializeApp(firebaseConfig);
  let loginEmail = document.querySelector("#loginEmail")
  let loginPassword = document.querySelector("#loginPassword")
  let login = document.querySelector("#login")
  let loginWithGoogle = document.querySelector("#loginWithGoogle")

  const provider = new GoogleAuthProvider()
  loginWithGoogle.addEventListener("click",()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      alert("google login successful")
      window.location.href = "./main.html"
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert("google login error")
      // ...
    });
  })
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  login.addEventListener("click", ()=>{
    signInWithEmailAndPassword (auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("(successful signin) Welcome to my Blogging app")
      window.location.href= "./main.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error in signin")
      // ..
    });
    
  })