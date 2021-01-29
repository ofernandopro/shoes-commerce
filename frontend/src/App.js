import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/cart/:id?' component={CartScreen}></Route>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path='/product/:id' component={ProductScreen} />
      </Switch>
    </Router>
  );
}

export default App;
