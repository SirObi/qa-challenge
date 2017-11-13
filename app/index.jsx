import React from 'react';
import {render} from 'react-dom';
import {createHistory} from 'history';
import { syncReduxAndRouter } from 'redux-simple-router'
import configureStore from './create-redux-store'
import history from './history';
import Root from './Root'

const store = configureStore();
syncReduxAndRouter(history, store);

render (
	<Root store={store} history={history}/>,
  	document.querySelector('.component-replace')
);
