import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ProductDetails } from './Components';
import {homePage, loginPage, signUpPage} from "./Pages/";
import { createProductPage} from './Pages/CreateProductPage/createProductPage';

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route path="/login" component={loginPage} />
          <Route path="/signup" component={signUpPage} />
          <Route path="/products/add" component={ createProductPage } />
          <Route path="/products/:product_id" component={ ProductDetails } />
        </Switch>
      </Router>
  );
};

export default App;
