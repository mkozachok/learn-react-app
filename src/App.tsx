import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import "./App.css";
import { ProductDetails } from "./components";
import {
  ProductsPage,
  homePage,
  loginPage,
  signUpPage,
  createProductPage,
  updateProductPage,
  AdminDashboard,
  NewOrderPage
} from "./pages";
import { browserHistory } from "./index";

export const App: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route path="/login" component={loginPage} />
        <Route path="/signup" component={signUpPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/admin/products/add" component={createProductPage} />
        <Route
          path="/admin/products/:product_id/edit"
          component={updateProductPage}
        />
        <Route path="/admin/products/:product_id" component={ProductDetails} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/orders/add" component={NewOrderPage} />
      </Switch>
    </Router>
  );
};

export default App;
