import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import browser from './reducers/browser';

const reducer = combineReducers({ browser });

export default createStore(
    reducer,
    {}, // initial state, could be loaded from local storage on app execution.
    applyMiddleware(thunk, logger)
);
