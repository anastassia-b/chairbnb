import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <div>
    <header>
        <h1>Chair BnB!</h1>
        <GreetingContainer />
    </header>
  </div>
);

export default App;
