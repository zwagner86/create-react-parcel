#!/usr/bin/env node

require('shelljs/global');
const path = require('path');
const fs = require('fs');
const figlet = require('figlet');
const chalk = require('chalk');
const {execSync} = require('child_process');
const spawn = require('cross-spawn');

const rewritePackageJson = require('./rewritePackageJson');

function shouldUseYarn() {
    try {
        execSync('yarnpkg --version', { stdio: 'ignore' });
        return true;
    } catch (e) {
        return false;
    }
}

const installDependencies = () => {
    console.log(chalk.white.bold('Installing Packages -- this might take a few minutes'));
    return new Promise((resolve, reject) => {
        let command;
        let args = ['install'];

        if (shouldUseYarn()) {
            command = 'yarn';
        } else {
            command = 'npm';
        }

        const child = spawn(command, args, { stdio: 'inherit' });
        child.on('close', code => {
            if (code !== 0) {
                reject({
                    command: `${command} ${args.join(' ')}`
                });
                return;
            }
            resolve();
        })
    })
};

const startInstall = appName => {
    console.log('');
    console.log('----------------------------------------------------------');
    console.log('');
    figlet('React + Parcel', function (err, data) {
        if (err) {
            return;
        }
        console.log(data);
        console.log('----------------------------------------------------------');
        console.log(chalk.white.bold('Welcome to Create React Parcel App'));
        console.log('----------------------------------------------------------');
        console.log('');
        cd(appName);
        installDependencies()
            .then(() => {
                console.log('');
                console.log('');
                console.log(chalk.white.bold('Let\'s get started!'));
                console.log('');
                console.log(chalk.green('Step 1: cd into the newly created ' + appName + ' directory'));
                console.log('----------------------------------------------------------');
                console.log(chalk.green('Step 2: Run `npm start`'));
                console.log('');
            })
            .catch(error => {
                console.log(chalk.red('An unexpected error occurred'));
                console.log(chalk.red(error));
            });
    });
};

// get dependencies passed to build, pass to installDependencies
const build = ({ appName, appArgs }) => {
    const appSrc = `${appName}/src`;

    cp('-r', __dirname + `/../src/.`, appName);
    cp(__dirname + `/../files-to-copy/index/${appArgs.indexFile}.js`, `${appSrc}/index.js`);
    cp(__dirname + `/../files-to-copy/app-component/${appArgs.appComponent}.jsx`, `${appSrc}/App.jsx`);

    if (appArgs.useRedux) {
        mkdir('-p', `${appSrc}/store`);
        mkdir('-p', `${appSrc}/reducers`);
        mkdir('-p', `${appSrc}/message`);
        cp(__dirname + `/../files-to-copy/store/${appArgs.storeFile}.js`, `${appSrc}/store/index.js`);
        cp(__dirname + `/../files-to-copy/reducer/${appArgs.reducerFile}.js`, `${appSrc}/reducers/index.js`);
        cp(__dirname + `/../files-to-copy/message/message-reducer.js`, `${appSrc}/message/message-reducer.js`);
    }

    if (appArgs.rootComponent) {
        cp(__dirname + `/../files-to-copy/root-component/${appArgs.rootComponent}.jsx`, `${appSrc}/Root.jsx`);
    }

    rewritePackageJson(`${appName}/package.json`, appName, appArgs)
        .then(() => {
            startInstall(appName);
        })
        .catch(() => {
            console.log(chalk.red('An unexpected error occurred.  Please try again.'))
        });
};

module.exports = build;
