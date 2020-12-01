import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-google-autocomplete';
import Newmapp from './Newmapp';
import Newtest from './Newtest';

import Newmap from './Newmapp';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";


// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyAAwFT-cjXOzNkjkxkneVulg-kiBjZlHKB';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const Newapp = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  
    
  
  return (
    <div className="search">
     

    <div className="Newapp">
      <a href="https://www.cluemediator.com">Clue Mediator</a><br /><br />
      {!loadMap ? <div>Loading...</div> : <Newmapp />}
     
      <br/><br/>

      
      <small><b>Note:</b> In order to make it work, you have to set the YOUR_GOOGLE_MAP_API_KEY in App.js file. </small>
    </div>
  
    </div>
  );
}

export default Newapp;
