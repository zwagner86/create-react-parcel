# Create React Parcel SPA CLI - `create-react-parcel`
This repository contains the CLI to help facilitate development of React + Parcel SPAs.

## Installing and using the CLI

Run `npm install -g create-react-parcel`.

Once installed, you can use the CLI from any directory by running `create-react-parcel [app-name]`.  You will be prompted to answer some questions for the CLI to configure your app appropriately.  After these questions are answered, you will be directed how to start up the app.  Enjoy!  

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
# 0.0.1 - 10/08/2018 - [Zach Wagner](mailto:zwagner86@gmail.com)
-   Published `create-react-parcel` CLI to create React SPAs with options for Redux and React Router.

...
```

*package.json*
```json
{
  "name": "create-react-parcel",
  "version": "0.0.1",
  ...
}
```
