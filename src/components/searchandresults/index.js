import React, { Component } from 'react';
import Input from './input';
import Card from './cards';
import './style.css';
import data from './data/data.json';
import _ from 'lodash'


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            selectedTown: []
        }
    }

    setQuery(e) {
        const { name, value } = e.target;
        this.setState({[name]: value});
        this.searchQuery(this.state.query)
    }

    searchQuery(query) {
        const root = data.data.communities
        const communitites = _.reject(root, (o) => {
            return o.name !== query
        })
        this.setState({ selectedTown: communitites });
    }

    render() {
        return(
            <div id='container'>
                <Input func={this.setQuery.bind(this)}
                        value={this.state.query} 
                        name='query'/>
                {
                    (this.state.query !== '') ?
                    _.map(this.state.selectedTown, (o) => {
                        return <Card header={o.name}
                                        image={o.thumb}
                                        text={o.description}
                                        obj={o}/>
                    })
                    : 
                    _.map(data.data.communities, (o) => {
                        return <Card header={o.name}
                                        image={o.thumb}
                                        text={o.description}
                                        obj={o}/>
                    })
                }
               
            </div>
        );
    }
}