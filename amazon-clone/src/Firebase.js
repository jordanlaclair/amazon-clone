import firebase from "firebase";

firebase.initializeApp({
	apiKey: "AIzaSyDPxDOoBv0p1Uehg__PmriVy88CrafdWX4",
	authDomain: "clone-8228d.firebaseapp.com",
	databaseURL: "https://clone-8228d.firebaseio.com",
	projectId: "clone-8228d",
	storageBucket: "clone-8228d.appspot.com",
	messagingSenderId: "805084785256",
	appId: "1:805084785256:web:16c213b7c478fcd5d3e9dd",
});

const auth = firebase.auth();

export { auth };
