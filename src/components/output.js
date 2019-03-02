import React,{ Component } from 'react';
import GoogleMapReact from 'google-map-react';


class Output extends Component{
    render(){
        return(
            <div style={{height:'50vh',width:'100%'}}>
            <GoogleMapReact bootstrapURLKeys={{ key:'AIzaSyDvoWla_tJUhFtCz9q8FP5MFVg39fXU_bE' }} defaultCenter={{lat:59.5,lng:30.33}} defaultZoom={11}>
            </GoogleMapReact>
            </div>
        );
    }
}

export default Output;