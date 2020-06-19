const fs = require('fs');
const dependencies = require('./dependencies');
const devDependencies = require('./devDependencies');

const rewritePackageJson = (file, appName, appArgs) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }

            // config dev dependencies
            let appDevDependencies = [
                ...devDependencies.BASIC_PACKAGES
            ];

            if (appArgs.useAdvancedBabel) {
                const {
                    STAGE_1_BABEL_PLUGIN_PACKAGES,
                    STAGE_2_BABEL_PLUGIN_PACKAGES,
                    STAGE_3_BABEL_PLUGIN_PACKAGES,
                } = devDependencies;

                appDevDependencies = appDevDependencies.concat([
                    ...STAGE_1_BABEL_PLUGIN_PACKAGES,
                    ...STAGE_2_BABEL_PLUGIN_PACKAGES,
                    ...STAGE_3_BABEL_PLUGIN_PACKAGES,
                ]);
            }

            // sort dev depencencies and remove initial newline and tab
            appDevDependencies.sort();
            appDevDependencies[0] = appDevDependencies[0].substr(5);

            // stringify dev dependencies and remove trailing commas
            let appDevDependenciesString = `${appDevDependencies}`;
            while (appDevDependenciesString.slice(-1) === ',') {
                appDevDependenciesString = appDevDependenciesString.slice(0, -1);
            }

            // config dependencies
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

            // sort dev depencencies and remove initial newline and tab
            appDependencies.sort();
            appDependencies[0] = appDependencies[0].substr(5);

            // stringify dependencies and remove trailing commas
            let appDependenciesString = `${appDependencies}`;
            while (appDependenciesString.slice(-1) === ',') {
                appDependenciesString = appDependenciesString.slice(0, -1);
            }

            // replace name
            let result1 = data.replace(/"name": "",/g, `"name": "${appName}",`);

            // rewrite dev dependencies
            let result2 = result1.replace(/"parcel-bundler": "1.12.4"/g, `${appDevDependenciesString}`);

            // rewrite dependencies
            const result3 = result2.replace(/"react": "16.13.1"/g, `${appDependenciesString}`);

            fs.writeFile(file, result3, 'utf8', err => {
                if (err) {
                    reject(err);
                }

                resolve();
            });
        });
    });
};

module.exports = rewritePackageJson;
