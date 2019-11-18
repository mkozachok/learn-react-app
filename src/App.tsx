import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {Home} from './Pages/Home';

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
  );
};

export default App;
