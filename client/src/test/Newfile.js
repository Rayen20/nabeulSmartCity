import React, { Component } from "react";
import {render} from 'react-dom';
 
export class Newfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }
    
      componentDidMount() {
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
        }
      }
    
      render() {
        return (
          <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            <h4>Using geolocation JavaScript API in React</h4>
          </div>
        );
      }
    }

    render(<Newfile />, document.getElementById("root"));
