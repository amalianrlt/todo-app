import React from 'react';
import { Route } from 'react-router-dom';
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/MainPage'
import WelcomePage from '../pages/WelcomePage'

const Routes = () => {
  return (
    <div>
      <Route path ="/" exact>
        <WelcomePage/>
      </Route>
      <Route path ="/signup" exact><SignUpPage/> </Route>
      <Route path ="/login" exact><LoginPage/>   </Route>
      <Route path ="/mainpage"><MainPage/>  </Route> 
    </div>
  )
}

export default Routes;
