import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import LandingPageHeader from './pages/layouts/LandingPageHeader';
import LandingPageFooter from './pages/layouts/LandingPageFooter';
import SignIn from './pages/auth/SignIn';
import Signup from './pages/auth/Signup';

function App() {
  return (
    <Switch>
        <Route path="/" exact>
          <LandingPageHeader/>
            <Home/>
          <LandingPageFooter/>
        </Route>

        <Route path="/sign-in" exact>
          <LandingPageHeader/>
            <SignIn/>
          <LandingPageFooter/>
        </Route>

        <Route path="/sign-up" exact>
          <LandingPageHeader/>
            <Signup/>
          <LandingPageFooter/>
        </Route>
    </Switch>
  );
}

export default App;
