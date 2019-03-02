import React,{ Component } from 'react';
import Geocode from 'react-geocode';
import Map from './maps';


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
            <div className="grid">
                <Map lat={this.state.lat} lng={this.state.lng} />
            </div>
        );
    }
}

export default Output;