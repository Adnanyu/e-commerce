import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import {getFirestore, doc, setDoc, getDoc, collection,
     writeBatch, query, getDocs
    } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtM87N9FpA0LjnX9O7Kh88-gcdIqK1iPo",
  authDomain: "crwn-clothing-v2-db-4177c.firebaseapp.com",
  projectId: "crwn-clothing-v2-db-4177c",
  storageBucket: "crwn-clothing-v2-db-4177c.appspot.com",
  messagingSenderId: "853573023998",
  appId: "1:853573023998:web:77d3adabb9cea165da8daf"
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
})
export  const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup( auth , provider);
export const signInWithGoogleRedirect = () => signInWithRedirect( auth, provider );

export const db = getFirestore();

export const addCollectionAndDocuments = async ( collectionKey , objectToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db)

    objectToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit()
    console.log('done')
}

export const getCategotyAndDocuments = async () => {

    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
    return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users' , userAuth.uid);



    

    const userSnapshot = await getDoc(userDocRef)

    

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error){
            console.log('there was an errror', error.message)
        }
    }
    return userDocRef;
}
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}
export const sigOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)