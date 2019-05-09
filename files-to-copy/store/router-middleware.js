import {createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const history = createHistory();
let store;

export default function create(initialState) {
    store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history)
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
