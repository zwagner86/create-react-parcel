const BASIC_PACKAGES = [
    `\n    "@babel/core": "7.5.5"`,
    `\n    "@babel/plugin-transform-runtime": "7.5.5"`,
    `\n    "@babel/preset-env": "7.5.5"`,
    `\n    "@babel/preset-react": "7.0.0"`,
    `\n    "@babel/runtime-corejs3": "7.5.5"`,
    `\n    "@spothero/eslint-config": "1.8.4"`,
    `\n    "@spothero/stylelint-config": "1.2.1"`,
    `\n    "@testing-library/jest-dom": "4.0.0"`,
    `\n    "@testing-library/react": "8.0.7"`,
    `\n    "babel-jest": "24.8.0"`,
    `\n    "jest": "24.8.0"`,
    `\n    "jest-transform-stub": "2.0.0"`,
    `\n    "node-sass": "4.12.0"`,
    `\n    "parcel-bundler": "1.12.3"`,
    `\n    "react-hot-loader": "4.12.10"`,
    `\n    "sass": "1.22.9"`
];
const STAGE_1_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-do-expressions": "7.5.0"`,
    `\n    "@babel/plugin-proposal-export-default-from": "7.5.2"`,
    `\n    "@babel/plugin-proposal-logical-assignment-operators": "7.2.0"`,
    `\n    "@babel/plugin-proposal-nullish-coalescing-operator": "7.4.4"`,
    `\n    "@babel/plugin-proposal-optional-chaining": "7.2.0"`,
    `\n    "@babel/plugin-proposal-pipeline-operator": "7.5.0"`,
];
const STAGE_2_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-decorators": "7.4.4"`,
    `\n    "@babel/plugin-proposal-export-namespace-from": "7.5.2"`,
    `\n    "@babel/plugin-proposal-function-sent": "7.5.0"`,
    `\n    "@babel/plugin-proposal-numeric-separator": "7.2.0"`,
    `\n    "@babel/plugin-proposal-throw-expressions": "7.2.0"`,
];
const STAGE_3_BABEL_PLUGIN_PACKAGES = [
    `\n    "@babel/plugin-proposal-class-properties": "7.5.5"`,
    `\n    "@babel/plugin-syntax-dynamic-import": "7.2.0"`,
    `\n    "@babel/plugin-syntax-import-meta": "7.2.0"`,
];

module.exports = {
    BASIC_PACKAGES,
    STAGE_1_BABEL_PLUGIN_PACKAGES,
    STAGE_2_BABEL_PLUGIN_PACKAGES,
    STAGE_3_BABEL_PLUGIN_PACKAGES
};
