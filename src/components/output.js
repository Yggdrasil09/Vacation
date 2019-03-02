import React,{ Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";


class Output extends Component{

    constructor(){
        super();
        this.state={
            lat:12.8296912,
            lng:80.1400671,
        };
    }

    render(){
        Geocode.setApiKey('AIzaSyDvoWla_tJUhFtCz9q8FP5MFVg39fXU_bE');
        Geocode.enableDebug();
        Geocode.fromAddress(this.props.spot).then(response => {
            const { lat, lng } = response.results[0].geometry.location;
            this.setState({
                lat:lat,
                lng:lng,
            });
        },error => {
            console.error(error);
        });
        return(
            <div style={{height:'50vh',width:'80%'}}>
                <GoogleMapReact bootstrapURLKeys={{ key:'AIzaSyDvoWla_tJUhFtCz9q8FP5MFVg39fXU_bE' }} defaultCenter={{lat:this.state.lat,lng:this.state.lng}} defaultZoom={14} />
            </div>
        );
    }
}

export default Output;