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

firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("index.html");
  } else {
    document.getElementById("userName").innerHTML = "Hello " + user.email;
  }
});

function logOut() {

    firebase.auth().signOut()
}
