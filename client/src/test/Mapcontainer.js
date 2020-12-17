import React, { Component } from 'react';
import { Map, GoogleApiWrapper,LoadScript ,Marker,InfoWindow} from 'google-maps-react';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import CurrentLocation from './CurrentLocation';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class Mapcontainer extends Component {

    render() {
        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
          <Map google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
        />
        </div>
       );
       }
   }
export default GoogleApiWrapper(
  
    (props) => ({
      apiKey:'AIzaSyAAwFT-cjXOzNkjkxkneVulg-kiBjZlHK',
      language: props.language,
    })
)(Mapcontainer)

