import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import "./App.css";
import { ProductDetails } from "./components";
import {
  homePage,
  loginPage,
  signUpPage,
  createProductPage,
  updateProductPage
} from "./pages";
import { browserHistory } from './index'

const App: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route path="/login" component={loginPage} />
        <Route path="/signup" component={signUpPage} />
        <Route path="/products/add" component={createProductPage} />
        <Route
          path="/products/:product_id/edit"
          component={updateProductPage}
        />
        <Route path="/products/:product_id" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default App;
