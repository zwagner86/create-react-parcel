import {createStore} from 'redux';
import reducers from '../reducers';

let store;

export default function create(initialState) {
    store = createStore(
        reducers,
        initialState
    );

    return store;
}

export const getStore = () => {
    return store;
};
