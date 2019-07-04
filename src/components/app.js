import React, { Component } from 'react';
import moment from "moment";
import PortfolioContainer from './portfolio/portfolio-container'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Cepraga Mihail Portfolio</h1>
        <h2>React Redux Router</h2>
        <h3>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </h3>
        <PortfolioContainer />
      </div>
    );
  }
}
