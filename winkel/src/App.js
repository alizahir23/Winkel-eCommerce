import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import Login from './Components/Login'
import Shop from './Components/Shop'
import Product from './Components/Product'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/shop" component={Shop} exact />
          <Route path="/shop/:pid" component={Product} exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
