import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, logout, login } from './util/session_api_util.js';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to ChairBnB!</h1>, root);
});
