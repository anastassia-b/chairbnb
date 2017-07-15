import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, logout, login } from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to ChairBnB!</h1>, root);
});
