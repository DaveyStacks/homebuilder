import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

export default class Search extends Component {
    render() {
        return(
            <Input onChange={this.props.func}
                    value={this.props.value}
                    name='query'/>
        );
    }
}