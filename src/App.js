import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Login } from './components/Login';
import { Home } from './components/Home';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path='/home'>
            <Home loggedIn={loggedIn} />
          </Route>
        </Switch>
        <Redirect from='/' to='/home' />
      </Router>
    </div>
  );
};

export default App;
