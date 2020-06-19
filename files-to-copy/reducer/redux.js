import {combineReducers} from '@reduxjs/toolkit';
import messageReducer from './message/message-slice';

export default combineReducers({
    message: messageReducer,
});
