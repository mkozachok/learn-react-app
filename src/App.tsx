import React from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {Home} from './Pages/Home';

const App: React.FC = () => {
  return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
  );
};

export default App;
