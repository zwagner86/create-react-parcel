import {createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'connected-react-router';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const history = createHistory();
const routingMiddleware = routerMiddleware(history);
let store;

export default function create(initialState) {
    store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(
                routingMiddleware
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
