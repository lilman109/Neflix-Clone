import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import * as ROUTES from './constants/route';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.HOME} component={Home} />
			</Switch>
		</Router>
	);
};

export default App;
