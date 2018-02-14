import React from 'react';
import GreetingContainer from './components/greeting/greeting_container';
import { Route } from 'react-router-dom';
import SessionFormContainer from './components/session/session_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>Lunch In The Sun</h1>
        <GreetingContainer />
      </header>

      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
