import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

const PrivateRoute = (props) => {
    const tokenExist = localStorage.getItem('token');
    if(tokenExist){
      return <Route {...props} />
    } 
    return (
        <Redirect to='/login' />
      );
}
 
export default PrivateRoute;