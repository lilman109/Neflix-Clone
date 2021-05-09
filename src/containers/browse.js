import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from '../containers/profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';

export const BrowseContainer = ({ slides }) => {
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const { firebaseApp } = useContext(FirebaseContext);
	const user = firebaseApp.auth().currentUser || {};

	useEffect(() => {
		console.log('akira ', profile);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	return profile.displayName ? (
		loading ? (
			<Loading src={user.photoURL} />
		) : null
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	);
};
