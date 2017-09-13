import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={Home}>
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/poweredby" component={PoweredBy} />
      <Route path="/Contact" component={Contact} />
    </Route>
  </Router>), document.getElementById('content')
);
