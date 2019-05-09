const BASIC_PACKAGES = [
    `\n    "autoprefixer": "9.5.1"`,
    `\n    "postcss-modules": "1.4.1"`,
    `\n    "prop-types": "15.7.2"`,
    `\n    "react": "16.8.6"`,
    `\n    "react-dom": "16.8.6"`
];
const REDUX_PACKAGES = [
    `\n    "react-redux": "6.0.1"`,
    `\n    "redux": "4.0.1"`
];
const HISTORY = `\n    "history": "4.7.2"`;
const REACT_ROUTER = `\n    "react-router": "5.0.0"`;
const REACT_ROUTER_DOM = `\n    "react-router-dom": "5.0.0"`;
const CONNECTED_REACT_ROUTER = `\n    "connected-react-router": "6.4.0"`;
const REDUX_PROMISE = `\n    "redux-promise-middleware": "6.1.0"`;
const REDUX_THUNK = `\n    "redux-thunk": "2.3.0"`;
const UTILITY_PACKAGES = {
    lodash:             `\n    "lodash": "4.17.11"`,
    ramda:              `\n    "ramda": "0.26.1"`
};
const TIME_PACKAGES = {
    moment:             `\n    "moment": "2.24.0"`,
    'moment-timezone':  `\n    "moment-timezone": "0.5.23"`,
    'date-fns':         `\n    "date-fns": "1.30.1"`
};
const ASYNC_PACKAGES = {
    axios: `\n    "axios": "0.18.0"`
};
const HOC_HELPER_PACKAGES = {
    recompose: `\n    "recompose": "0.30.0"`
};
const MISC_PACKAGES = {
    classnames: `\n    "classnames": "2.2.6"`,
    uuid:       `\n    "uuid": "3.3.2"`
};

module.exports = {
    BASIC_PACKAGES,
    REDUX_PACKAGES,
    HISTORY,
    REACT_ROUTER,
    REACT_ROUTER_DOM,
    CONNECTED_REACT_ROUTER,
    REDUX_PROMISE,
    REDUX_THUNK,
    UTILITY_PACKAGES,
    TIME_PACKAGES,
    ASYNC_PACKAGES,
    HOC_HELPER_PACKAGES,
    MISC_PACKAGES,
    COMMON_PACKAGES: {
        ...UTILITY_PACKAGES,
        ...TIME_PACKAGES,
        ...ASYNC_PACKAGES,
        ...HOC_HELPER_PACKAGES,
        ...MISC_PACKAGES
    }
};
