import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import Login from './Components/Login'
import Shop from './Components/Shop'
import Product from './Components/Product'
import UserContext from './Components/UserContext'
import PrivateRoute from './config/PrivateRoute'


function App(props) {
  const [User, setUser] = useState(null);

  return (
    <Router>
      <div>
        <UserContext.Provider value={{ User, setUser }}>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/shop" component={Shop} exact />
            <PrivateRoute path="/shop/:pid" component={Product} exact />
          </Switch>
          <Footer />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
