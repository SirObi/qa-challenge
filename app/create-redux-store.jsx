import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { syncReduxAndRouter } from 'redux-simple-router'

const finalCreateStore = compose(
	applyMiddleware(thunkMiddleware)
)(createStore);

export default function configureStore (initialState) {
	return finalCreateStore(rootReducer, initialState)
};
