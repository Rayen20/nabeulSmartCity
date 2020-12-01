import React, { useEffect, useRef ,useState} from 'react';
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
import axios from 'axios';
import Geocode from "react-geocode";
import SearchBox from './SearchBox';

function GMap() {
  const googleMapRef = useRef(null);
  let googleMap = null;
  var map , geocoder ,marker;

 
  var depart,arrivee,ptCheck;
  const [data, setData] = useState({ hits: [] } );
  // list of icons
  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }

  

  // list of the marker object along with icon
  const markerList = [
    { lat: 36.4619912, lng:  10.732724864883313, icon: iconList.icon1 },
    { lat: 36.4611912, lng:  10.732724864885311, icon: iconList.icon2 },
    { lat: 36.4619812, lng:  10.732724864893311, icon: iconList.icon3 },
    { lat: 36.4611078, lng:  10.732724864888311, icon: iconList.icon4 }
  ]
  

  


  // initialize the google map
  const initGoogleMap = () => {
    
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 36.4619, lng: 10.7327 },
      zoom: 10 
    });
    
   
	
  } 
  

  function trouveRoute() {
    /*test si les variables sont bien initialisés*/
    if (depart && arrivee)
    {
    /*mode de transport*/
    var choixMode = document.getElementById("mode").value;
    
      var request = {
          origin:depart, 
          destination:arrivee,
          travelMode: new window.google.maps.DirectionsTravelMode[choixMode]
      };
    /*appel à l'API pour tracer l'itinéraire*/
    var directionsService = new  window.google.maps.DirectionsService();
    var directionsDisplay = new  window.google.maps.directionsDisplay();
      directionsService.route(request, function(response, status) {
        if (status == new window.google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        }
      });
    }
    }

    useEffect(() => {
      fetch("/markers/mark")
        .then((res) => {
         
          return res.json();
          
          
        })
        .then((data) => {
          setData(data);
          console.log(data);
          googleMap = initGoogleMap();
          var bounds = new window.google.maps.LatLngBounds();
          data.map(x => {
            const marker = createMarker(x);
            bounds.extend(marker.position);
          });
          googleMap.fitBounds(bounds); // the map to contain all markers
          return  setData(data);
       
         
  
        })
        
        /*const fetchData = async () => {
          const result = await axios(
            'hhttp://localhost:5000/markers/mark',
          );
          console.log(data)
          setData(result.data);
          console.log(result);
        };
        
  
       
       fetchData()*/
       console.log(data.hits);
       console.log(setData(data));
       
      
    }, []);

  function rechercher(src,code)
  {
    ptCheck = code; /*adresse de départ ou arrivée ? */
	if (geocoder) {
	  geocoder.geocode( { 'address': document.getElementById(src).value}, function(results, status) {
		if (status == new window.google.maps.GeocoderStatus.OK) {
		 
		  /*ajoute un marqueur à l'adresse choisie*/
		  map.setCenter(results[0].geometry.location);
		  if (marker) { marker.setMap(null);}
		  marker = new  window.google.maps.Marker({
			  map: map, 			  
			  position: results[0].geometry.location
		  });
		  /*on remplace l'adresse par celle fournie du geocoder*/
		  document.getElementById(src).value = results[0].formatted_address;
		  if (ptCheck)
		  {
		  depart = results[0].formatted_address;
		  } else
		  {
		  arrivee = results[0].formatted_address;
		  }
		  /*trace la route*/
		  trouveRoute();
		} else {
		  alert("Geocode n'a rien trouvé !\n raison : " + status);
		}
	  });
	}
  }

 
  function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        resultsMap.setCenter(results[0].geometry.location);
        new window.google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

  // create marker on google map
  const createMarker = (dataa) => new window.google.maps.Marker({
    position: { lat: dataa.lat, lng: dataa.lng },
    map: googleMap,
    icon: {
      url: dataa.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    }
  });

  return(
    
    <div>

      
    <div

    
    ref={googleMapRef}
    style={{ width: 1500, height: 1000 }}
    
    
  
  /> 
  </div>
  
  
  );
}

export default GMap;