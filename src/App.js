import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import WelcomePage from './pages/SignUpPage'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path ="/" component={WelcomePage}exact/>
          <Route path ="/signup" component={SignUpPage}exact/>
          <Route path ="/login" component={LoginPage} exact/>
          <Route path ="/mainpage" component={MainPage}/>
          <Route component ={()=> "Pages Not Found"}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
