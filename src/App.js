import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoutes from './components/privateRoutes';
import Logo from './images/logo192.png';
import './css/style.css';

import './App.css';



function App() {
  return(
    <>
    <h1> Lesson 3 Public and Private Router, boilerplate integration </h1>
    
    <Router>
    <Link to="/home">Home link</Link>
    <br />
    <br />
    <br />
    <img src={Logo} alt="logo" />
    <Link to="/user">User link</Link>
      <Switch>
            <Route path="/home">
              <h1>its a home page</h1>
            </Route>
            <PrivateRoutes path="/user">
              <h1>its a private route</h1>
            </PrivateRoutes>
            <Route path="/login">
              <h1>please login first</h1>
            </Route>
      </Switch>


    </Router>
    </>
  )
  
}


export default App;
