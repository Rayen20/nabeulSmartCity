import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Costumer from './Costumer';
import Service from './Service';
import Details from './Details';




export default class  Home extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Header />
        <Costumer />
        <Service />
        <Details />
      
        
      </div>
    );
  }
}


