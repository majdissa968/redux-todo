// React
import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/index';
import { loadState, saveState } from './modules/localStorage';

//Styling
import 'font-awesome/css/font-awesome.css';
import './css/style.css';

// Create redux store
const store = createStore(
	appReducer,
	loadState(),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
	saveState(store.getState());
});

render(
	<Provider store={store}>
		<Router />
	</Provider>,
	document.querySelector('#main')
);
