import { initializeApp } from 'firebase/app';
import { 
	getAuth, 
	signInWithRedirect, 
	signInWithPopup, 
	GoogleAuthProvider
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDqwvvQtyAtJPnbp7tDsadKqIQn5DWj8W8",
	authDomain: "crwn-clothing-db-6f73a.firebaseapp.com",
	projectId: "crwn-clothing-db-6f73a",
	storageBucket: "crwn-clothing-db-6f73a.appspot.com",
	messagingSenderId: "104248242669",
	appId: "1:104248242669:web:02f6e218af2e3c917977e4"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
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
				createdAt
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userDocRef;
}
