import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.getPortfolioItems = this.getPortfolioItems.bind(this);

        this.state = {
            pageTitle: "Welcom to my portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => item.category === filter)
        })
    }
    getPortfolioItems() {
        // Make a request for a user with a given ID
        axios.get('https://cepragamihail.devcamp.space/portfolio/portfolio_items')
            .then(response =>
                this.setState({
                    data: response.data.portfolio_items
                })
            )
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                console.log('finally method')
            });
    }

    portfolioItems() {

        return this.state.data.map(item =>
            <PortfolioItem key={item.id} item={item} />
        );
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button className="btn" onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button className="btn" onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                {this.portfolioItems()}
            </div>
        );
    }
}