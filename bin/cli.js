#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');
const chalk = require('chalk');
const inquirer = require('inquirer');

const build = require('./build');
const dependencies = require('./dependencies');

const utilityPackages = Object.keys(dependencies.UTILITY_PACKAGES);
const timePackages = Object.keys(dependencies.TIME_PACKAGES);
const asyncPackages = Object.keys(dependencies.ASYNC_PACKAGES);
const hocHelperPackages = Object.keys(dependencies.HOC_HELPER_PACKAGES);
const miscPackages = Object.keys(dependencies.MISC_PACKAGES);

program
    .version(package.version)
    .usage('<keywords>')
    .parse(process.argv);

const appNamePrompt = {
    type: 'input',
    name: 'appName',
    message: 'Please enter your app name (kebab-case):',
    validate: function (value) {
        if (value.length > 0) {
            return true;
        }

        return 'Please enter a valid app name.';
    },
    when: function (answers) {
        return program.args.length < 1;
    }
};

const reduxPrompt = {
    type: 'confirm',
    name: 'redux',
    message: 'Will you be using Redux?:'
};

const reduxMiddlewarePrompt = {
    type: 'confirm',
    name: 'reduxMiddleware',
    message: 'Do you need redux-thunk and redux-promise middleware?:',
    when: function (answers) {
        return answers.redux;
    }
};

const reactRouterPrompt = {
    type: 'confirm',
    name: 'router',
    message: 'Will you be using React Router?:'
};

const babelPrompt = {
    type: 'confirm',
    name: 'babel',
    message: 'Do you want some advanced Babel transpiling plugins?:'
};

const otherPackagesPrompt = {
    type: 'checkbox',
    name: 'others',
    pageSize: 25,
    message: 'Select any of the following commonly used packages you need:\n',
    choices: [
        new inquirer.Separator('\n === Utility Packages === '),
        ...utilityPackages,
        new inquirer.Separator('\n === Time Packages === '),
        ...timePackages,
        new inquirer.Separator('\n === Async Packages === '),
        ...asyncPackages,
        new inquirer.Separator('\n === HOC Helper Packages === '),
        ...hocHelperPackages,
        new inquirer.Separator('\n === Miscellaneous Packages === '),
        ...miscPackages
    ]
};

inquirer.prompt([
    appNamePrompt,
    reduxPrompt,
    reduxMiddlewarePrompt,
    reactRouterPrompt,
    babelPrompt,
    otherPackagesPrompt
]).then(answers => {
    const appName = program.args[0] || answers.appName;
    const useRedux = answers.redux;
    const useReduxMiddleware = (answers.reduxMiddleware);
    const useRouter = answers.router;
    const useAdvancedBabel = answers.babel;
    const packages = answers.others;

    const appArgs = {
        useAdvancedBabel: useAdvancedBabel,
        useRedux: useRedux,
        useReduxMiddleware: useReduxMiddleware,
        useRouter: useRouter,
        packages: packages
    };

    if (useRedux) {
        appArgs.reducerFile = 'redux';
        appArgs.rootComponent = (useRouter) ? 'root-redux-router' : 'root-redux';

        if (useReduxMiddleware && useRouter) {
            appArgs.storeFile = 'all-middleware';
            appArgs.reducerFile = 'redux-with-router';
        } else if (useReduxMiddleware && !useRouter) {
            appArgs.storeFile = 'redux-middleware';
        } else if (!useReduxMiddleware && useRouter) {
            appArgs.storeFile = 'router-middleware';
            appArgs.reducerFile = 'redux-with-router';
        } else {
            appArgs.storeFile = 'no-extra-middleware';
        }
    }

    if (!useRedux && useRouter) {
        appArgs.rootComponent = 'root-router';
    }

    appArgs.appComponent = (useRedux) ? 'app-redux' : 'app-basic';
    appArgs.indexFile = (useRedux || useRouter) ? 'index-root' : 'index-app';

    build({ appName, appArgs });
}).catch(error => {
    console.log(chalk.red('Oops! Something went wrong!'));
    console.log(chalk.red(error));
});
