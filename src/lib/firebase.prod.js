import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyACvUD32NjM_VB_I_b1Kfq_MBDDesixicU',
	authDomain: 'netflix-clone-10890.firebaseapp.com',
	projectId: 'netflix-clone-10890',
	storageBucket: 'netflix-clone-10890.appspot.com',
	messagingSenderId: '532232109057',
	appId: '1:532232109057:web:57f808c2db9c28e20c1400',
};

const firebaseApp = firebase.initializeApp(config);

export { firebaseApp };
