import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore } from 'redux';
import { Router, hashHistory} from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import ErpReducers from './reducers/ErpReducers.jsx';
import routes from './routes.jsx';

const middleware = applyMiddleware(promise(),thunk,logger());
const store = createStore(ErpReducers,middleware);

ReactDOM.render(
	 <Provider store={store}>	 	 
	 	 <Router history={hashHistory} routes={routes} />	    
	 </Provider>	
	 ,document.getElementById('root'));

