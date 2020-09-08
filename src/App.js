import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header'
import './Header.css';
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
           <Route path="/checkout">
             <Header/>
             CHECKOUT PAGE</Route>
           <Route path="/login">LOGIN PAGE</Route>
           <Route path="/">
             <Header/>
             <Home/>   </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
