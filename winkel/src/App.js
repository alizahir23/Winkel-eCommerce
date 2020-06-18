import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
