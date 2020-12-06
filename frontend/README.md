# MI Visualization Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
All the installation processes were tested on Centos 7. If you are not running production ready version, I suggest you to use Centos 7 for manual installation. Before running this application please be sure that you already installed and running [backend](../backend/README.md).

### Dockerized Version (Production)
* **Requirements:** [docker](https://docs.docker.com/get-docker/) & [docker-compose](https://docs.docker.com/compose/install/)

```
    cd backend
    docker-compose up
```

### Manual Installation (Development)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.