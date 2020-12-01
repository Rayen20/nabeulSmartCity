
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmF5ZW5lIiwiYSI6ImNrZXM1NzUyajAxbnAycmxodW9vY2wxYTgifQ.jlKau_SROmUdvbb3vXIVcw';


export default class Parkingmaphome extends Component {

    
// Code from the next few steps will go here
constructor(props) {
  super(props);
  this.state = {
    lng: 5,
    lat: 34,
    zoom: 2
  };
}

componentDidMount() {
  const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
  });
  map.on('move', () => {
  this.setState({
    lng: map.getCenter().lng.toFixed(4),
    lat: map.getCenter().lat.toFixed(4),
    zoom: map.getZoom().toFixed(2)
  });
});

/*var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoicmF5ZW5lIiwiYSI6ImNrZXM1NzUyajAxbnAycmxodW9vY2wxYTgifQ.jlKau_SROmUdvbb3vXIVcw';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});*/
}


render() {
  return (
    <div>
<div className='sidebarStyle'>
<div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
</div>
<div ref={el => this.mapContainer = el} className='mapContainer' />
</div>
  )
}
}
 
ReactDOM.render(<Parkingmaphome />, document.getElementById('root'));