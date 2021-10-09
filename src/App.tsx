import React from 'react';
import './App.css';
import { Redirect, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import LandingPageHeader from './pages/layouts/LandingPageHeader';
import LandingPageFooter from './pages/layouts/LandingPageFooter';
import SignIn from './pages/auth/SignIn';
import Signup from './pages/auth/Signup';
import ApplicationGuide from './pages/ApplicationGuide';
import InternationalRegulations from './pages/InternationalRegulations';
import LicencesPermits from './pages/LicencesPermits';
import Wildlife from './pages/Wildlife';
import Faq from './pages/Faq';
import PermitApplication from './pages/PermitApplication';
import CookieService from './services/CookieService';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import TermsOfService from './pages/TermsOfService';

function isLoggedIn(){
    if(CookieService.get('access_token') !== undefined){
      return true
    }else{
      return false
    }
  }
  
function App() {
  
  return (
    <Switch>
        <Route path="/" exact>
          <LandingPageHeader/>
            <Home/>
          <LandingPageFooter/>
        </Route>

        {/* Auth routes */}

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

        <Route path="/forgot-password" exact>
          <LandingPageHeader/>
            <ForgotPassword/>
          <LandingPageFooter/>
        </Route>

        <Route path="/reset-password" exact>
          <LandingPageHeader/>
            <ResetPassword/>
          <LandingPageFooter/>
        </Route>

        {/* Permit application */}

        <Route path="/permit-application" render={() => (
            isLoggedIn() ? (
              <><LandingPageHeader/>
                <PermitApplication/>
            <LandingPageFooter/></>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}> 
          </Route>

        {/* Pages */}

        <Route path="/application-guide" exact>
          <LandingPageHeader/>
            <ApplicationGuide/>
          <LandingPageFooter/>
        </Route>

        <Route path="/international-regulations" exact>
          <LandingPageHeader/>
            <InternationalRegulations/>
          <LandingPageFooter/>
        </Route>

        <Route path="/licenses-and-permits" exact>
          <LandingPageHeader/>
            <LicencesPermits/>
          <LandingPageFooter/>
        </Route>

        <Route path="/wildlife" exact>
          <LandingPageHeader/>
            <Wildlife/>
          <LandingPageFooter/>
        </Route>

        <Route path="/faq" exact>
          <LandingPageHeader/>
            <Faq/>
          <LandingPageFooter/>
        </Route>

        <Route path="/privacy-policy-and-terms-of-service" exact>
          <LandingPageHeader/>
            <TermsOfService/>
          <LandingPageFooter/>
        </Route>
        
    </Switch>
  );
}

export default App;
