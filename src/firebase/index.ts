import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6Mz1O60OZWDf_iA5NgB9np_0FbHLBd1I",
  authDomain: "my-little-jira.firebaseapp.com",
  projectId: "my-little-jira",
  storageBucket: "my-little-jira.appspot.com",
  messagingSenderId: "319920519366",
  appId: "1:319920519366:web:f9ac957e38f54d6a0cffc7"
};

export const firebaseApp = initializeApp(firebaseConfig);
