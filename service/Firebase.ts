import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKAyRaeFk7asxtPjYTZc5qP873bve_9rc",
  authDomain: "petcation-35703.firebaseapp.com",
  databaseURL: "https://petcation-35703-default-rtdb.firebaseio.com",
  projectId: "petcation-35703",
  storageBucket: "petcation-35703.appspot.com",
  messagingSenderId: "577097513066",
  appId: "1:577097513066:web:926ce1367eefb2bab97213",
  measurementId: "G-7D6YNGBY4P",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
