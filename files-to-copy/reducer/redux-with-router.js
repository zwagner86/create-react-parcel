import {combineReducers} from '@reduxjs/toolkit';
import {connectRouter} from 'connected-react-router';
import messageReducer from './message/message-slice';

export default (history) =>
    combineReducers({
        message: messageReducer,
        router: connectRouter(history),
    });
