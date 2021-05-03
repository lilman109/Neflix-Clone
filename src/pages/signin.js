import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/route';

export const SignIn = () => {
	const history = useHistory();
	const { firebaseApp } = useContext(FirebaseContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSignIn = (event) => {
		event.preventDefault();

		firebaseApp
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmail('');
				setPassword('');
				setError(error.message);
			});
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
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base onSubmit={handleSignIn}>
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
						<Form.Submit disabled={!email || !password} type='submit'>
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
