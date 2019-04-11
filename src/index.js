import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

//import rootReducer from './State/Reducer/RootReducer'; 
// const store = createStore(rootReducer);

import CombineAll from './OrganicApp/Store/Reducers/CombineAll';

// Setup for Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Adding a Middleware
const logger = (store) => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching ', action);
            const result = next(action);
            console.log('[Middleware] next state ', store.getState());
            return result;
        }
    }
}

const store = createStore(CombineAll, composeEnhancers(applyMiddleware(logger, thunk)));


ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')   
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
