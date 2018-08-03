import React, { Component } from 'react';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import Modal from './../modal'

export default class CardTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            community: props.obj,
            showModal: false
        }
    }

    renderModal(e) {
        const { value } = e.target;
        this.setState({ community: value });
        this.setState({ showModal: true });
    }

    hideModal() {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <div>
                <Card onClick={this.renderModal.bind(this)}>
                    <h1>{this.props.header}</h1>
                    <CardMedia> 
                        <img src={'https://res.cloudinary.com/renderinghouse/image/upload/app/demo/thumbnails/' + this.props.image} />
                    </CardMedia>
                    <CardContent>
                        <p>{this.props.text}</p>
                    </CardContent>
                </ Card>
                <Modal hideModal={this.hideModal.bind(this)}
                        showModal={this.state.showModal}
                        community={this.state.community}/>
            </div>
        );
    }
}