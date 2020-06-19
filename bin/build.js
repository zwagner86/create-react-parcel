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

const startInstall = (appName, createNewDir) => {
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

        if (createNewDir) {
            cd(appName);
        }

        installDependencies()
            .then(() => {
                console.log('');
                console.log('');
                console.log(chalk.white.bold('Let\'s get started!'));
                console.log('');
                if (createNewDir) {
                    console.log(chalk.green('Step 1: cd into the newly created ' + appName + ' directory'));
                    console.log('----------------------------------------------------------');
                    console.log(chalk.green('Step 2: Run `npm start`'));
                } else {
                    console.log(chalk.green('Step 1: Run `npm start`'));
                }
                console.log('');
            })
            .catch(error => {
                console.log(chalk.red('An unexpected error occurred'));
                console.log(chalk.red(error));
            });
    });
};

// get dependencies passed to build, pass to installDependencies
const build = ({ appName, appArgs, createNewDir }) => {
    const appPath = (createNewDir) ? appName : '.';
    const appSrcDir = `${appPath}/src`;

    if (createNewDir) {
        // copy all files that dont need to be conditionally copied based on options
        cp('-r', __dirname + `/../src/.`, appPath);
    } else {
        cp('-r', __dirname + `/../src/*`, appPath);
        cp('-r', __dirname + `/../src/.*`, appPath);
    }

    // copy .babelrc
    cp(__dirname + `/../files-to-copy/babel/${(appArgs.useAdvancedBabel) ? '.advanced-babelrc' : '.babelrc'}`, `${appPath}/.babelrc`);

    // copy index.js
    cp(__dirname + `/../files-to-copy/index/${appArgs.indexFile}.js`, `${appSrcDir}/index.js`);

    // copy App component
    cp(__dirname + `/../files-to-copy/app-component/${appArgs.appComponent}.jsx`, `${appSrcDir}/App.jsx`);

    // copy redux related files
    if (appArgs.useRedux) {
        mkdir('-p', `${appSrcDir}/message`);
        cp(__dirname + `/../files-to-copy/store/${appArgs.storeFile}.js`, `${appSrcDir}/store.js`);
        cp(__dirname + `/../files-to-copy/reducer/${appArgs.reducerFile}.js`, `${appSrcDir}/root-reducer.js`);
        cp(__dirname + `/../files-to-copy/message/message-slice.js`, `${appSrcDir}/message/message-slice.js`);
    }

    // copy Root component
    if (appArgs.rootComponent) {
        cp(__dirname + `/../files-to-copy/root-component/${appArgs.rootComponent}.jsx`, `${appSrcDir}/Root.jsx`);
    }

    // rewrite package.json
    rewritePackageJson(`${appPath}/package.json`, appName, appArgs)
        .then(() => {
            startInstall(appName, createNewDir);
        })
        .catch(() => {
            console.log(chalk.red('An unexpected error occurred.  Please try again.'))
        });
};

module.exports = build;
