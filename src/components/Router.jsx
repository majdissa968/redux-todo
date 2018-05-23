import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Help from './Help';
import NotFound from './NotFound';

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/Help" component={Help} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
