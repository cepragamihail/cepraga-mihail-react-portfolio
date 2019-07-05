import React from 'react';
import PortfolioContainer from '../portfolio/portfolio-container';
import moment from 'moment';

export default function() {
    return (
        <div>
            <h2>Home</h2>
        <h3>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </h3>
        <PortfolioContainer />
        </div>
    );
}