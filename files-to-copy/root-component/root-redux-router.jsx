import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {
    Route,
    Switch
} from 'react-router-dom';
import createStore, {getHistory} from 'store';
import App from './App';

const Root = () => {
    return (
        <Provider store={createStore()}>
            <ConnectedRouter history={getHistory()}>
                <Switch>
                    <Route
                        path="/"
                        component={App}
                    />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

export default Root;
