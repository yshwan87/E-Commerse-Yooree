import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXgl9TWgPUJIQz1thzTsPhxHTYR-1bWd0",
  authDomain: "yooree-964c9.firebaseapp.com",
  projectId: "yooree-964c9",
  storageBucket: "yooree-964c9.appspot.com",
  messagingSenderId: "357491706885",
  appId: "1:357491706885:web:49fa0eff696f704843606c",
  measurementId: "G-QRZJV9HY3C",
};

const firabaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };