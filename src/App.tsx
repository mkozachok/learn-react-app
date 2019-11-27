import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ProductDetails } from './Components';
import {homePage, loginPage, signUpPage} from "./Pages/";
import InputField from './Components/Input/Input';

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route path="/login" component={loginPage} />
          <Route path="/signup" component={signUpPage} />
          <Route path="/products/:product_id" component={ ProductDetails } />
          <Route path="/input" render={() => (
                <div
                  style={{
                    display: 'flex',
                    height: '100vh',
                    justifyContent:
                    'center',
                    alignItems: 'center'
                  }}>
                    <InputField
                      id="test"
                      required={ true }
                      placeholder="test"
                      labelText="Test"
                      error={ false }
                    />
                </div>
              ) 
          }/>
        </Switch>
      </Router>
  );
};

export default App;
