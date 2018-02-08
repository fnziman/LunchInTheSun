import React from 'react';
import ReactDOM from 'react-dom';
import * as Util from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<h1>TEST</h1>, root);

  window.signup = Util.signup;
  window.login = Util.login;
  window.logout = Util.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});
