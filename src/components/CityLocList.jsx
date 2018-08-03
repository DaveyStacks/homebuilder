import React, { Component } from 'react';


export default class CityLocList extends Component {

    constructor(props){
        super(props);
    }





    render(){

       const {name , zip, stateCode, img} = this.props;

        return (

            <div class="card">
                <img class="card-img-top" src={img} alt="Card image cap" />
                    <div class="card-block">
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{zip}</p>
                    </div>
                <div class="card-footer">
                    <small class="text-muted">{stateCode} - {stateCode}</small>
                </div>
            </div>
        )
    }
}