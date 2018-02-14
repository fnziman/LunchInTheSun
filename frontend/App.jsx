import React from 'react';
import GreetingContainer from './components/greeting/greeting_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from './util/route_util';
import SessionFormContainer from './components/session/session_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>Lunch In The Sun</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
