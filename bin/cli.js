#!/usr/bin/env node

const program = require('commander');
const spawn = require('child_process').spawn;
const package = require('../package.json');
const chalk = require('chalk');
const inquirer = require('inquirer');

const build = require('./build');
const dependencies = require('./dependencies');

const commonPackages = Object.keys(dependencies.COMMON_PACKAGES);


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

const otherPackagesPrompt = {
    type: 'checkbox',
    name: 'others',
    message: 'Select any of the following commonly used packages you need?:\n',
    choices: commonPackages
};

inquirer.prompt([
    appNamePrompt,
    reduxPrompt,
    reduxMiddlewarePrompt,
    reactRouterPrompt,
    otherPackagesPrompt
]).then(answers => {
    const appName = program.args[0] || answers.appName;
    const useRedux = answers.redux;
    const useReduxMiddleware = (answers.reduxMiddleware);
    const useRouter = answers.router;
    const packages = answers.others;

    const appArgs = {
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
        } else if (useReduxMiddleware && !useRouter) {
            appArgs.storeFile = 'redux-middleware';
        } else if (!useReduxMiddleware && useRouter) {
            appArgs.storeFile = 'router-middleware';
        } else {
            appArgs.storeFile = 'no-extra-middleware';
        }
    }

    if (!useRedux && useRouter) {
        appArgs.rootComponent = 'root-router';
    }

    appArgs.appComponent = (useRedux) ? 'app-redux' : 'app-basic';
    appArgs.mainFile = (useRedux || useRouter) ? 'main-root' : 'main-app';

    spawn(build({ appName: appName, appArgs }), { shell: true, stdio: 'inherit' });
});
