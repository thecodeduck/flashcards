/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import '../css/style.css';


// render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
