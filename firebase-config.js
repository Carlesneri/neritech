const dotenv = require('dotenv')

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "neritech-57f2d.firebaseapp.com",
    projectId: "neritech-57f2d",
    storageBucket: "neritech-57f2d.appspot.com",
    messagingSenderId: "737271616573",
    appId: process.env.FIREBASE_APP_ID,
    measurementId: "G-TQQ54VMSRY"
};

export default firebaseConfig
  