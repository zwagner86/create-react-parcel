import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {createBrowserHistory as createHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from './root-reducer';

const history = createHistory();
let store;

export default function create(initialState) {
    store = configureStore({
        reducer: createRootReducer(history),
        middleware: [routerMiddleware(history), ...getDefaultMiddleware()],
        preloadedState: initialState,
    });

    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('./root-reducer', () => {
            const newCreateRootReducer = require('./root-reducer').default;

            store.replaceReducer(newCreateRootReducer(history));
        });
    }

    return store;
}

export const getStore = () => {
    return store;
};

export const getHistory = () => {
    return history;
};
