import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAt4-dOk5jT2LgTeiO8djzu8C_eaktpq-M",
    authDomain: "procrew-bd6a5.firebaseapp.com",
    databaseURL: "https://procrew-bd6a5-default-rtdb.firebaseio.com",
    projectId: "procrew-bd6a5",
    storageBucket: "procrew-bd6a5.appspot.com",
    messagingSenderId: "172962963751",
    appId: "1:172962963751:web:e017aaa5d9283623b90902",
    measurementId: "G-QKTNMF9BYG"
  };


  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };