import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Chair BnB!</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
