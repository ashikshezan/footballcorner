import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Content from './components/Content'

import Home from './pages/Home'
import League from './pages/League'
import Team from './pages/Team'
import Error from './pages/Error'

import './App.css';

import DataProvider from './context'

function App() {
  return (
    <DataProvider>
      <Router>
        <Layout>
          <Navbar />
          <Sidebar />
          <Content>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/league/:slug' component={League} />
              <Route exact path='/team/:slug' component={Team} />
              <Route component={Error} />
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </DataProvider>
  )
}

export default App;
