import React, { Component } from 'react';
import '../bootstrap.css';
import data from '../data.json';
import CityLocList from './CityLocList.jsx';




export default class CityLoc extends Component {

    constructor(props){
        super(props);

      
    }
    
    state = {
        data: data,
        
    }

    handleOnClick = (e) => {

        <CityLocList
             
            />

    }


    render(){
       var imgurl = this.state.data.data.communities_thumb_prefix+'/';
       var CityLists;
        console.log("My Data", this.state.data.data.communities);
        const obj = this.state.data.data.communities;
     // const JSONparse = JSON.parse(this.obj);
        const LabelLists = obj.map(label =>

           // cityl = label.cityLocation;

            CityLists = <CityLocList
              key={label.cityLocation.stateCode}
              name={label.cityLocation.name}
              zip={label.cityLocation.zip}
              stateCode={label.cityLocation.stateCode}
              img={imgurl+label.thumb}
              onClick={this.handleOnClick}
            />
        )

        return (
    <div>
       
         <div className='container text-justify-center'> 


            {LabelLists}



         </div>  
    </div>
        )
    }


}