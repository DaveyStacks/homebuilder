import React, { Component } from 'react';
import './style.css'

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        if (this.props.showModal) {
            return (
                <div>
                    <div id='modal'
                        onClick={this.props.hideModal}>
                    </div>
                </div>
            );
        } else {
            return null
        }
    }
}