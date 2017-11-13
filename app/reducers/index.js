import {combineReducers} from 'redux';
import {cards} from './card-store';
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  	cards,
	routing: routeReducer
});

export default rootReducer
