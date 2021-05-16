import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/route';

export const SignUp = () => {
	const history = useHistory();
	const { firebaseApp } = useContext(FirebaseContext);

	const [firstName, setFirstname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSignUp = (event) => {
		event.preventDefault();

		firebaseApp
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) =>
				result.user
					.updateProfile({
						displayName: firstName,
						photoURL: Math.floor(Math.random() * 5) + 1,
					})
					.then(() => {
						history.push(ROUTES.BROWSE);
					})
			)
			.catch((error) => {
				setFirstname('');
				setEmail('');
				setPassword('');
				setError(error.message);
			});
	};

	const handleFirstNameChange = (event) => {
		setFirstname(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignUp} method='POST'>
						<Form.Input
							onChange={handleFirstNameChange}
							value={firstName}
							placeholder='First Name'
						></Form.Input>
						<Form.Input
							onChange={handleEmailChange}
							value={email}
							placeholder='Email Address'
						></Form.Input>
						<Form.Input
							onChange={handlePasswordChange}
							value={password}
							placeholder='Password'
							type='password'
							autocomplete='off'
						></Form.Input>
						<Form.Submit
							disabled={!email || !password || !firstName}
							type='submit'
						>
							Sign In
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to Netflix?&nbsp;
						<Form.Link to={ROUTES.SIGN_UP}>Sign Up Now</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is proctected by Google reCAPTCHA to ensure you're now a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer></FooterContainer>
		</>
	);
};
