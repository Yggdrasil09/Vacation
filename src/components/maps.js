import React,{Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component{
    render(){
        return(
            <div style={{height:'50vh',width:'70%'}}>
                <GoogleMapReact bootstrapURLKeys={{ key:'AIzaSyDvoWla_tJUhFtCz9q8FP5MFVg39fXU_bE' }} defaultCenter={{lat:this.props.lat,lng:this.props.lng}} defaultZoom={14} />
            </div>
        );
    }
}

export default Map;