import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";

export const initializeLoginFrameWork = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
};

export const handleGoogleSignIn = () => {
	var googleProvider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(googleProvider)
		.then(function (result) {
			const { displayName, email, photoURL } = result.user;
			const signedInUser = {
				isSignedIn: true,
				name: displayName,
				email: email,
				photo: photoURL,
			};
			return signedInUser;
		})
		.catch(function (error) {});
};
