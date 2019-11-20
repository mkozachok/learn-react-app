import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import {Home} from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:product_id" component={ ProductDetails } />
        </Switch>
      </Router>
  );
};

export default App;
