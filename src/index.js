import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import './assets/stylesheets/custom.css'
import './assets/css/theme.css'

// ReactDOM.render(<App />, document.getElementById('root'));
const history = createBrowserHistory();

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<Router history={history}><App /></Router>, rootElement);
} else {
  render(<Router history={history}><App /></Router>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
