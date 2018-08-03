import React, { Component } from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';


export default class CardTemplate extends Component {
    render() {
        return (
            <div>
                <Card >
                    <h1>{this.props.header}</h1>
                    <CardMedia> 
                        <img src={this.props.image} />
                    </CardMedia>
                    <CardContent>
                        <p>{this.props.text}</p>
                    </CardContent>
                </Card>
            </div>
        );
    }
}