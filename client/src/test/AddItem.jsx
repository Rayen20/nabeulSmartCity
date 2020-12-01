import React, { useState } from 'react'
import {Ddemo} from './Ddemo';
import InputDetails from './InputDetails';

export default function AddItem() {

  const [showMap, setShowMap] = useState(true);
  const [location, setLocation] = useState({})

  const getLocation = coords => {
    console.log(coords);
    setLocation(coords);
    setShowMap(false);
  };

  return (
    <div>
      <h2>Add</h2>
        {
          showMap ?
          <Ddemo isAdding getLocation={getLocation} /> :
          <InputDetails location={location} />
        }
    </div>
  )
}
