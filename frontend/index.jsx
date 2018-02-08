import React from 'react';
import ReactDOM from 'react-dom';
import * as Util from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>TEST</h1>, root);

  window.signup = Util.signup;
  window.login = Util.login;
  window.logout = Util.logout;
  
});
