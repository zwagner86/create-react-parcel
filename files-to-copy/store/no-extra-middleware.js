import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

let store;

export default function create(initialState) {
    store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });

    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept('./root-reducer', () => {
            const newRootReducer = require('./root-reducer').default;

            store.replaceReducer(newRootReducer);
        });
    }

    return store;
}

export const getStore = () => {
    return store;
};
