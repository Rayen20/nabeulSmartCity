import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.tsx';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Googlem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 36.4619912, lng: 10.732724864883311},
              {latitude: 36.4619912, longitude: 10.732724864883311},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }
  static defaultProps = {
    center: {
      lat: 36.4619912,
      lng: 10.732724864883311
    },
    zoom: 9
  };
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  
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
           
          {this.displayMarkers()}
          
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

export default Googlem;