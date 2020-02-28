import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import League from './pages/League'
import Team from './pages/Team'
import Error from './pages/Error'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/league/:slug' component={League} />
        <Route exact path='/team/:slug' component={Team} />
        <Route component={Error} />
      </Switch>
    </Router>
  )
}

export default App;
