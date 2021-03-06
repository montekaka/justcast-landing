import React from 'react';
import ReactDOM from 'react-dom';
// import { hydrate, render } from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/stylesheets/custom.css'
import './assets/stylesheets/widget-player.css'
import './assets/stylesheets/mobile-player.css'
import './assets/css/theme.css'
import './assets/fonts/Feather/feather.css'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-NHN5344',
}

TagManager.initialize(tagManagerArgs)
// ReactDOM.render(<App />, document.getElementById('root'));
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}><App /></Router>
  , document.getElementById('root'));

// const rootElement = document.getElementById("root");

// if (rootElement.hasChildNodes()) {
//   hydrate(<Router history={history}><App /></Router>, rootElement);
// } else {
//   render(<Router history={history}><App /></Router>, rootElement);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
