const BASIC_PACKAGES = [
    `\n    "autoprefixer": "9.7.3"`,
    `\n    "core-js": "3.6.2"`,
    `\n    "postcss-modules": "1.5.0"`,
    `\n    "prop-types": "15.7.2"`,
    `\n    "react": "16.12.0"`,
    `\n    "react-dom": "16.12.0"`,
    `\n    "regenerator-runtime": "0.13.3"`
];
const REDUX_PACKAGES = [
    `\n    "react-redux": "7.1.3"`,
    `\n    "redux": "4.0.5"`
];
const HISTORY = `\n    "history": "4.10.1"`;
const REACT_ROUTER = `\n    "react-router": "5.1.2"`;
const REACT_ROUTER_DOM = `\n    "react-router-dom": "5.1.2"`;
const CONNECTED_REACT_ROUTER = `\n    "connected-react-router": "6.6.1"`;
const REDUX_PROMISE = `\n    "redux-promise-middleware": "6.1.2"`;
const REDUX_THUNK = `\n    "redux-thunk": "2.3.0"`;
const UTILITY_PACKAGES = {
    lodash:             `\n    "lodash": "4.17.15"`,
    ramda:              `\n    "ramda": "0.26.1"`
};
const TIME_PACKAGES = {
    moment:             `\n    "moment": "2.24.0"`,
    'moment-timezone':  `\n    "moment-timezone": "0.5.27"`,
    'date-fns':         `\n    "date-fns": "2.9.0"`
};
const ASYNC_PACKAGES = {
    axios: `\n    "axios": "0.19.1"`
};
const HOC_HELPER_PACKAGES = {
    recompose: `\n    "recompose": "0.30.0"`
};
const MISC_PACKAGES = {
    classnames: `\n    "classnames": "2.2.6"`,
    uuid:       `\n    "uuid": "3.3.3"`
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
