import React from 'react';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import { UseAuthListener } from './hooks';
import * as ROUTES from './constants/route';

const App = () => {
	const user = UseAuthListener();

	return (
		<Router>
			<Switch>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_IN}
					exact
				>
					<SignIn />
				</IsUserRedirect>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.SIGN_UP}
					exact
				>
					<SignUp />
				</IsUserRedirect>
				<IsUserRedirect
					user={user}
					loggedInPath={ROUTES.BROWSE}
					path={ROUTES.HOME}
					exact
				>
					<Home />
				</IsUserRedirect>
				<ProtectedRoute user={user} path={ROUTES.BROWSE}>
					<Browse />
				</ProtectedRoute>
			</Switch>
		</Router>
	);
};

export default App;
