import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import LandingPageHeader from './pages/layouts/LandingPageHeader';
import LandingPageFooter from './pages/layouts/LandingPageFooter';

function App() {
  return (
    <Switch>
        <Route path="/" exact>
          <LandingPageHeader/>
            <Home/>
          <LandingPageFooter/>
        </Route>
    </Switch>
  );
}

export default App;
