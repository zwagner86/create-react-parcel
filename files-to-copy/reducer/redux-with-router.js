import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import message from '../message/message-reducer';

export default (history) =>
    combineReducers({
        message,
        router: connectRouter(history),
    });
