import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Home from './Home';
import BugDetailContainer from './BugDetailContainer';

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path ='/BugDetailContainer' component={BugDetailContainer}></Route>
		</Route>	
	</Router>
, document.querySelector('#app'));
