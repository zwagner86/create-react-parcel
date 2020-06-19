import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    );
};

export default Root;
