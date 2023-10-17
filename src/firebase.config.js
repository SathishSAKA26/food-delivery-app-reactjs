import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4cihUTvCjb6tx_bkIIMHHr1N0jxBt7JM",
  authDomain: "fooddelivery-app-c480e.firebaseapp.com",
  databaseURL: "https://fooddelivery-app-c480e-default-rtdb.firebaseio.com",
  projectId: "fooddelivery-app-c480e",
  storageBucket: "fooddelivery-app-c480e.appspot.com",
  messagingSenderId: "516682566993",
  appId: "1:516682566993:web:959e5a286d31507b115770"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };