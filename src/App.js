import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './login';
import User from './user';

import './App.css';



function App() {
  return(
    <>
    <Router>
      <nav style={{ display: 'inline'}}>
        <ul>
          <Link to="/home" style={{marginRight: '20px'}}>Home</Link>
          <Link to="/about" style={{marginRight: '20px'}}>About us</Link>
          <Link to="/login" style={{marginRight: '20px'}}>Login</Link>
          <Link to="/user/5" style={{marginRight: '20px'}}>current user</Link>
        </ul>

      </nav>
    <Switch>
      <Route path="/home">
        <h1>its a home page</h1>
      </Route>

      <Route path="/about">
      <h1>its a about page</h1>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/user/:id">
        <User />
      </Route>

    </Switch>

    </Router>
    </>
  )
  
}

export default App;
