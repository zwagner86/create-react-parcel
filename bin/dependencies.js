const BASIC_PACKAGES = [
    `\n    "autoprefixer": "9.8.0"`,
    `\n    "core-js": "3.6.5"`,
    `\n    "postcss-modules": "2.0.0"`,
    `\n    "prop-types": "15.7.2"`,
    `\n    "react": "16.13.1"`,
    `\n    "react-dom": "16.13.1"`,
    `\n    "regenerator-runtime": "0.13.5"`
];
const REDUX_PACKAGES = [
    `\n    "@reduxjs/toolkit": "1.3.6"`,
    `\n    "react-redux": "7.2.0"`,
];
const HISTORY = `\n    "history": "4.10.1"`;
const REACT_ROUTER = `\n    "react-router": "5.2.0"`;
const REACT_ROUTER_DOM = `\n    "react-router-dom": "5.2.0"`;
const CONNECTED_REACT_ROUTER = `\n    "connected-react-router": "6.8.0"`;
const UTILITY_PACKAGES = {
    lodash:             `\n    "lodash": "4.17.15"`,
    ramda:              `\n    "ramda": "0.27.0"`
};
const TIME_PACKAGES = {
    moment:             `\n    "moment": "2.27.0"`,
    'moment-timezone':  `\n    "moment-timezone": "0.5.31"`,
    'date-fns':         `\n    "date-fns": "2.14.0"`
};
const ASYNC_PACKAGES = {
    axios: `\n    "axios": "0.19.2"`
};
const HOC_HELPER_PACKAGES = {
    recompose: `\n    "recompose": "0.30.0"`
};
const MISC_PACKAGES = {
    classnames: `\n    "classnames": "2.2.6"`,
    clsx:       `\n    "clsx": "1.1.1"`,
    uuid:       `\n    "uuid": "8.1.0"`
};

module.exports = {
    BASIC_PACKAGES,
    REDUX_PACKAGES,
    HISTORY,
    REACT_ROUTER,
    REACT_ROUTER_DOM,
    CONNECTED_REACT_ROUTER,
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
