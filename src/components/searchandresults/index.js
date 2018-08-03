import React, { Component } from 'react';
import Input from './input';
import Card from './cards';
import './style.css'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    setQuery(e) {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div id='container'>
                <Input func={this.setQuery}
                        value={this.state.query} />
                <Card header=''
                        image=''
                        text=''/>
            </div>
        );
    }
}