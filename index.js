const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBK3ifeWp6XlL-8AX8BeJkZ97WCduHbvyc",
    authDomain: "fir-project-ee339.firebaseapp.com",
    projectId: "fir-project-ee339",
    storageBucket: "fir-project-ee339.appspot.com",
    messagingSenderId: "71640805067",
    appId: "1:71640805067:web:d5b9ba77decaec90bbf54e",
    measurementId: "G-8S94YX4FY1",
  });
  
  const auth = firebaseApp.auth();
  const dataBase = firebaseApp.firestore();


let loginForm = document.getElementById('loginForm').addEventListener('submit', (event)=>{
    event.preventDefault()
});


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace('welcome.html')
    }
  })


  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email)
    console.log(password)
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error)=>{
        document.getElementById('error').innerHTML = error.message
    })
  }

  function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((res) => {
    // Signed in 
    alert("signUp successfully")
    // ...
  })
  .catch((error) => {
    document.getElementById('error').innerHTML = error.message
  });
  }

  function forgotPassword() {
    const email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
   alert("passwordReset successfully, and code send your email ")
  })
  .catch((error) => {
    document.getElementById('error').innerHTML = error.message
 
  });
  }