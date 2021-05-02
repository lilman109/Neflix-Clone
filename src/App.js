import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/route';

const App = () => {
	return (
		<Router>
			<Route exact path={ROUTES.HOME} component={Home} />
			<Route path={ROUTES.BROWSE} component={Browse} />
			<Route exact path={ROUTES.SIGN_IN} component={SignIn} />
			<Route exact path={ROUTES.SIGN_UP} component={SignUp} />
		</Router>
	);
};

export default App;
