# Create React Parcel SPA CLI - `create-react-parcel-app`
This repository contains the CLI to help facilitate development of React + Parcel SPAs.

## Quick Overview

```sh
npx create-react-parcel-app my-app
```
You'll need to answer a few questions and then you are good to go!

```sh
cd my-app
npm start
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher)_

Then open [http://localhost:1234/](http://localhost:1234/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

This app uses Parcel.  You **don’t** need to install or configure tools like Webpack or Babel.<br>
Parcel handles all that so that you can focus on the code.

Just create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node >= 10.13.x on your local development machine.** You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-parcel-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### npm

```sh
npm init react-parcel-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-parcel-app my-app
```

_`yarn create` is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies.  The basic folder structure looks like:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .browserslistrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .npmrc
├── .nvmrc
├── .postcssrc
└── src
    ├── App.jsx
    ├── App.scss
    ├── index.html
    ├── index.js
    └── index.scss
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

This will run tests using Jest and React Testing Library.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### Older npm version instructions

```sh
npm install -g create-react-parcel-app
create-react-parcel-app my-app
```

## Local Development
Making updates to the module produced by this repository is simple. Just run `npm install` and all the dependencies will be downloaded appropriately.

To test the CLI, run `node [path-to-this-working-directory]/bin/cli.js` from any level above this directory.

### Making CLI Updates
There are a few things to remember when making updates to any modules:

1. Make your code and test changes as necessary.
1. Update `CHANGELOG.md` to ensure everyone knows what was changed.
1. Update `package.json` with the proper version bump according to [Semantic Versioning](http://semver.org/).


File changes should mimic the following:

*CHANGELOG.md*
```
# 0.0.1 - 10/17/2018 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   Published `create-react-parcel-app` CLI to create React SPAs with options for Redux and React Router.

...
```

*package.json*
```json
{
  "name": "create-react-parcel-app",
  "version": "0.0.1",
  ...
}
```
