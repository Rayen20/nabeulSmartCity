import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.tsx';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Testmapp extends Component {
  static defaultProps = {
    center: {
      lat: 36.4619912,
      lng: 10.732724864883311
    },
    zoom: 9
  };

  render() {
    return (
      <div>
        <header id="header" class="header">
        <div class="header-content">
           
      <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Nos Objectifs</h2>
                            <p class="p-heading p-large">We serve small and medium sized companies in all tech related industries with high quality growth services which are presented below</p>
        </div> 
      </div>
      </div>
      </div>
      </header>
    
     
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAAwFT-cjXOzNkjkxkneVulg-kiBjZlHKA" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={36.4619912}
            lng={10.732724864883311}
            name="My Marker"
            color="blue"
          />
          <Marker
            lat={36.5}
            lng={10.732724864883311}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default Testmapp;