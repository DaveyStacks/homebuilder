import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

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
            <Input onChange={this.setQuery}
                    value={this.state.query}
                    name='query'/>
        );
    }
}