const initialState = {
    message: 'Welcome to React + Parcel with Redux',
};

export default function message(state = initialState, {type, payload}) {
    switch (type) {
        default:
            return state;
    }
}
