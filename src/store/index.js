import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from './auth';
import restaurants from './restaurants';
import menu from './menu';

const reducer = combineReducers({
  auth,
  restaurants,
  menu
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './auth';
export * from './restaurants';
export * from './menu';
