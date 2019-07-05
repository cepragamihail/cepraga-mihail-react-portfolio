import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contcat from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match';
import moment from 'moment';

export default class App extends Component {

  constructor() {
    super();
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }

  getPortfolioItems() {
    // Make a request for a user with a given ID
    axios.get('https://cepragamihail.devcamp.space/portfolio/portfolio_items')
      .then( response => {
        console.log("my respons data:=> ", response);
      })
      .catch( error => {
        console.log(error);
      })
      .finally( () => {
        console.log('finally method')
      });
  }

  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>

        <Router>
          <div>
            <h1>Cepraga Mihail Portfolio</h1>
            <h3>
              {moment().format('MMMM Do YYYY, h:mm:ss a')}
            </h3>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contcat} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
