import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/index';

import 'font-awesome/css/font-awesome.css';
import './css/style.css';

const store = createStore(
	appReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.querySelector('#main')
);
