import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/cart/:id?' component={CartScreen}></Route>
        <Route exact path='/product/:id' component={ProductScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/shipping" component={ShippingAddressScreen} />
        <Route path="/payment" component={PaymentMethodScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
