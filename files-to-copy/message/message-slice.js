import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    message: 'Welcome to React + Parcel with Redux',
};

// Using createSlice here because it uses both createReducer and createAction in the background
// It will be easier to expand on this without refactoring code
// See https://redux-toolkit.js.org/usage/usage-guide#creating-slices-of-state for details
const messageSlice = createSlice({
    name: 'message',
    initialState,
});

export default messageSlice.reducer;
