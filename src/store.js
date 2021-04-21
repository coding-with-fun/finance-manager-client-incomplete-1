/**
 * @author Harsh Patel @harsh2124
 */

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import root from './reducers/root.reducer';

const store = createStore(root, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
