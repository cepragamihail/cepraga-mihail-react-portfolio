import React, { Component } from 'react';
import PortfolioItem from './portfolio-item';
export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcom to my portfolio",
            isLoading: false,
            data: [
                { title:"Quip", category: "eCommerce", slug: "quip" }, 
                { title:"Eventbrite", category: "Scheduling", slug: "eventbrite" },
                { title:"Ministry Safe", category: "Enterprise", slug: "ministry-safe" },
                { title: "SwingAway", category: "eCommerce", slug: "swingaway"}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }
        handleFilter(filter) {
            this.setState({
                data: this.state.data.filter(item => item.category === filter)
            })
        }

    portfolioItems() {
        return this.state.data.map( item => <PortfolioItem title={item.title} url={"google.com"} slug={item.slug}/> );
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <hr/>
                <button onClick={ () => this.handleFilter('eCommerce') }>eCommerce</button>
                <button onClick={ () => this.handleFilter('Scheduling') }>Scheduling</button>
                <button onClick={ () => this.handleFilter('Enterprise') }>Enterprise</button>
                <hr/>
                {this.portfolioItems()}
            </div>
        );
    }
}