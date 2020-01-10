const BASIC_PACKAGES = [
    `\n    "@babel/core": "7.7.7"`,
    `\n    "@babel/plugin-transform-runtime": "7.7.6"`,
    `\n    "@babel/preset-env": "7.7.7"`,
    `\n    "@babel/preset-react": "7.7.4"`,
    `\n    "@babel/runtime-corejs3": "7.7.7"`,
    `\n    "@spothero/eslint-config": "1.9.0"`,
    `\n    "@spothero/stylelint-config": "1.4.0"`,
    `\n    "@testing-library/jest-dom": "4.2.4"`,
    `\n    "@testing-library/react": "9.4.0"`,
    `\n    "babel-jest": "24.9.0"`,
    `\n    "jest": "24.9.0"`,
    `\n    "jest-transform-stub": "2.0.0"`,
    `\n    "node-sass": "4.13.0"`,
    `\n    "parcel-bundler": "1.12.4"`,
    `\n    "prettier": "1.18.2"`,
    `\n    "react-hot-loader": "4.12.18"`,
    `\n    "sass": "1.24.3"`
];
const STAGE_1_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-do-expressions": "7.7.4"`,
    `\n    "@babel/plugin-proposal-export-default-from": "7.7.4"`,
    `\n    "@babel/plugin-proposal-logical-assignment-operators": "7.7.4"`,
    `\n    "@babel/plugin-proposal-nullish-coalescing-operator": "7.7.4"`,
    `\n    "@babel/plugin-proposal-optional-chaining": "7.7.5"`,
    `\n    "@babel/plugin-proposal-pipeline-operator": "7.7.7"`,
];
const STAGE_2_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-decorators": "7.7.4"`,
    `\n    "@babel/plugin-proposal-export-namespace-from": "7.7.4"`,
    `\n    "@babel/plugin-proposal-function-sent": "7.7.4"`,
    `\n    "@babel/plugin-proposal-numeric-separator": "7.7.4"`,
    `\n    "@babel/plugin-proposal-throw-expressions": "7.7.4"`,
];
const STAGE_3_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-class-properties": "7.7.4"`,
    `\n    "@babel/plugin-syntax-import-meta": "7.7.4"`,
];

module.exports = {
    BASIC_PACKAGES,
    STAGE_1_BABEL_PLUGIN_PACKAGES,
    STAGE_2_BABEL_PLUGIN_PACKAGES,
    STAGE_3_BABEL_PLUGIN_PACKAGES
};
