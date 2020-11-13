const BASIC_PACKAGES = [
    `\n    "@babel/core": "7.12.3"`,
    `\n    "@babel/plugin-transform-runtime": "7.12.1"`,
    `\n    "@babel/preset-env": "7.12.1"`,
    `\n    "@babel/preset-react": "7.12.5"`,
    `\n    "@babel/runtime-corejs3": "7.12.5"`,
    `\n    "@spothero/eslint-config": "1.9.1"`,
    `\n    "@spothero/prettier-config": "0.1.1"`,
    `\n    "@spothero/stylelint-config": "1.4.0"`,
    `\n    "@testing-library/jest-dom": "5.11.5"`,
    `\n    "@testing-library/react": "11.1.1"`,
    `\n    "babel-jest": "26.6.3"`,
    `\n    "jest": "26.6.3"`,
    `\n    "jest-extended": "0.11.5"`,
    `\n    "jest-transform-stub": "2.0.0"`,
    `\n    "node-sass": "5.0.0"`,
    `\n    "parcel-bundler": "1.12.4"`,
    `\n    "prettier": "2.1.2"`,
    `\n    "react-hot-loader": "4.13.0"`,
    `\n    "sass": "1.29.0"`
];
const STAGE_1_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-do-expressions": "7.12.1"`,
    `\n    "@babel/plugin-proposal-export-default-from": "7.12.1"`,
    `\n    "@babel/plugin-proposal-pipeline-operator": "7.12.1"`,
];
const STAGE_2_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-decorators": "7.12.1"`,
    `\n    "@babel/plugin-proposal-function-sent": "7.12.1"`,
    `\n    "@babel/plugin-proposal-throw-expressions": "7.12.1"`,
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
