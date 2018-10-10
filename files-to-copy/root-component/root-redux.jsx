import React from 'react';
import {Provider} from 'react-redux';
import createStore from 'store';
import App from './App';

const Root = () => {
    return (
        <Provider store={createStore()}>
            <App />
        </Provider>
    );
};

export default Root;
