import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
let store;

export default function create(initialState) {
    store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(
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
