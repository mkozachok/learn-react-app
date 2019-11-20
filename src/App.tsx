import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {homePage, loginPage, signUpPage} from "./Pages/";

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route path="/login" component={loginPage} />
          <Route path="/signup" component={signUpPage} />
        </Switch>
      </Router>
  );
};

export default App;
