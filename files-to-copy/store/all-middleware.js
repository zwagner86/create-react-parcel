import {createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const history = createHistory();
const routingMiddleware = routerMiddleware(history);
let store;

export default function create(initialState) {
    store = createStore(
        connectRouter(history)(reducers),
        initialState,
        composeEnhancers(
            applyMiddleware(
                routingMiddleware,
                thunkMiddleware,
                promiseMiddleware()
            )
        )
    );

    return store;
}

export const getStore = () => {
    return store;
};

export const getHistory = () => {
    return history;
};
