import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, Link, Switch, Redirect } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchContainer from './search/search_container';
import ChairFormContainer from './chair_form/chair_form_container';
import ChairShowContainer from './chair_show/chair_show_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Chair BnB!</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/chairs/new" component={ChairFormContainer} />
      <Route path="/chairs/:chairId" component={ChairShowContainer} />
      <Route exact path="/" component={SearchContainer} />
    </Switch>
</div>
);

export default App;
