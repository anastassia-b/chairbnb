import React from 'react';
import ReactDOM from 'react-dom';
import { signup, logout, login } from './actions/session_actions';
import { fetchChairs } from './actions/chair_actions';
import Root from './components/root';
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

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.fetchChairs = fetchChairs;

  window.dispatch(fetchChairs());
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
