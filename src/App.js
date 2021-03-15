import React, { useState } from 'react';

import './themes/wireframe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/sections/Navbar';

function App() {

  return (
    <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
    </Router>
  );
}

export default App;
