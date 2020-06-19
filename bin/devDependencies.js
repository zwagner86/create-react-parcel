const BASIC_PACKAGES = [
    `\n    "@babel/core": "7.10.2"`,
    `\n    "@babel/plugin-transform-runtime": "7.10.1"`,
    `\n    "@babel/preset-env": "7.10.2"`,
    `\n    "@babel/preset-react": "7.10.1"`,
    `\n    "@babel/runtime-corejs3": "7.10.2"`,
    `\n    "@spothero/eslint-config": "1.9.0"`,
    `\n    "@spothero/stylelint-config": "1.4.0"`,
    `\n    "@testing-library/jest-dom": "5.10.1"`,
    `\n    "@testing-library/react": "10.3.0"`,
    `\n    "babel-jest": "26.0.1"`,
    `\n    "jest": "26.0.1"`,
    `\n    "jest-transform-stub": "2.0.0"`,
    `\n    "node-sass": "4.14.1"`,
    `\n    "parcel-bundler": "1.12.4"`,
    `\n    "prettier": "2.0.5"`,
    `\n    "react-hot-loader": "4.12.21"`,
    `\n    "sass": "1.26.8"`
];
const STAGE_1_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-do-expressions": "7.10.1"`,
    `\n    "@babel/plugin-proposal-export-default-from": "7.10.1"`,
    `\n    "@babel/plugin-proposal-logical-assignment-operators": "7.10.1"`,
    `\n    "@babel/plugin-proposal-pipeline-operator": "7.10.1"`,
];
const STAGE_2_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-decorators": "7.10.1"`,
    `\n    "@babel/plugin-proposal-export-namespace-from": "7.10.1"`,
    `\n    "@babel/plugin-proposal-function-sent": "7.10.1"`,
    `\n    "@babel/plugin-proposal-throw-expressions": "7.10.1"`,
];
const STAGE_3_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-syntax-import-meta": "7.10.1"`,
];

module.exports = {
    BASIC_PACKAGES,
    STAGE_1_BABEL_PLUGIN_PACKAGES,
    STAGE_2_BABEL_PLUGIN_PACKAGES,
    STAGE_3_BABEL_PLUGIN_PACKAGES
};
