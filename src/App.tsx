import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {Home} from './Pages/Home/Home';
import {Login} from './Pages/Login/Login';
import {SignUp} from './Pages/SignUp/SignUp'

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
  );
};

export default App;
