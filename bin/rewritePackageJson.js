const fs = require('fs');
const dependencies = require('./dependencies');

const rewritePackageJson = (file, appName, appArgs) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }

            const packages = appArgs.packages;
            let appDependencies = [
                ...dependencies.BASIC_PACKAGES
            ];

            if (appArgs.useRedux) {
                appDependencies = appDependencies.concat(dependencies.REDUX_PACKAGES);

                if (appArgs.useRouter) {
                    appDependencies.push(dependencies.CONNECTED_REACT_ROUTER);
                    appDependencies.push(dependencies.REACT_ROUTER);
                    appDependencies.push(dependencies.HISTORY);
                }
            }

            if (appArgs.useReduxMiddleware) {
                appDependencies.push(dependencies.REDUX_PROMISE);
                appDependencies.push(dependencies.REDUX_THUNK);
            }

            if (appArgs.useRouter) {
                appDependencies.push(dependencies.REACT_ROUTER_DOM);
            }

            if (packages && packages.length > 0) {
                packages.forEach(package => {
                    appDependencies.push(dependencies.COMMON_PACKAGES[package]);
                });
            }

            appDependencies.sort();
            appDependencies[0] = appDependencies[0].substr(5);

            let appDependenciesString = `${appDependencies}`;
            while (appDependenciesString.slice(-1) === ',') {
                appDependenciesString = appDependenciesString.slice(0, -1);
            }

            let result1 = data.replace(/"name": "",/g, `"name": "${appName}",`);
            const result2 = result1.replace(/"react": "16.8.6"/g, `${appDependenciesString}`);

            fs.writeFile(file, result2, 'utf8', err => {
                if (err) {
                    reject(err);
                }

                resolve();
            });
        });
    });
};

module.exports = rewritePackageJson;
