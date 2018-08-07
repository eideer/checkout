## Checkout

A checkout app in JavaScript.

### Description

This app is an attempt at a [Redacted] coding challenge, implemented in React & Redux using [Create React App](https://github.com/facebookincubator/create-react-app).

It's not a complete app, just the client, and loads data from JSON files included in the client, returned via a Promise that resolves after a random timeout of up to 1000ms, to mimick the latency of calling an API.

It requires a recent version of [Yarn](https://github.com/yarnpkg/yarn) to install, and run.

### Install

    git clone https://github.com/eideer/checkout
    cd checkout
    yarn install

### Run

    yarn start

### Test

With the latest create-react-app failing to execute tests with yarn, the included tests can be run with:

    npm test

### Assumptions

The approach for implementing this app has been to create a series of commits that incrementally add functionality.

Each commit, hopefully, passes the tests included with it, runs within the browser, and in cases, includes a note in the commit message to try and explain the change.

The implementation makes a few of assumptions.

1. That there can only be one promotion per user and product combination.

2. That product & promotion prices are always given as decimal values, and quantities as integers.

3. That product & promotion data is validated on input, by the source system where it comes from, there is no checking against incomplete or invalid product or promotion values within the app.

### Limitations

The test cases for the adjustments reducer remain incomplete, and are marked with TODO comments.

Neither performance optimisations or styling have been addressed, and are also left for future exercises.
