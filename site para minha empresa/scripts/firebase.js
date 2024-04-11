const firebaseConfig = {
    apiKey: "AIzaSyCZvKxcbP8qdaOVYSgMYgX1WxD8v2e8Yh0",
    authDomain: "biblioteca-eb6d5.firebaseapp.com",
    databaseURL: "https://biblioteca-eb6d5-default-rtdb.firebaseio.com",
    projectId: "biblioteca-eb6d5",
    storageBucket: "biblioteca-eb6d5.appspot.com",
    messagingSenderId: "34813988559",
    appId: "1:34813988559:web:9a36222b4dc8b1f879b1ba"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.database()
const auth = firebase.auth()

