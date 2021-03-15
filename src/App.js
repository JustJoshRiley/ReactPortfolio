import React from 'react';

import './themes/wireframe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './components/pages/Home'
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
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
