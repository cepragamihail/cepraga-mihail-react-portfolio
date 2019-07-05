import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contcat from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

      <Router>
        <div>
        <h1>Cepraga Mihail Portfolio</h1>
        <h2>React Redux Router</h2>

        <NavigationContainer />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-me" component={About} />
          <Route path="/contact" component={Contcat} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio/:slug" component={PortfolioDetail} />
        </Switch>
        </div>
      </Router>

      </div>
    );
  }
}
