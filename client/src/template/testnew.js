import React, { useEffect, useRef ,useState} from 'react';
import axios from 'axios';
import Geocode from "react-geocode";
import SearchBox from './SearchBox';

function testnew() {
  const googleMapRef = useRef(null);
  let googleMap = null;
  var map , geocoder ,marker;
  var directionsService = new window.google.maps.DirectionsService();
  var directionsDisplay = new window.google.maps.DirectionsDisplay();
  var map,geocoder, marker;
  var depart,arrivee,ptCheck;
 
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
  const initGoogleMap = () => {new window.google.maps.Map(googleMapRef.current, {
    center: { lat: 36.4619, lng: 10.7327 },
    zoom: 10 
  });}

  
  function init() {
	/*gestion des routes*/
    directionsDisplay = new window.google.maps.DirectionsRenderer();
	/*emplacement par défaut de la carte (j'ai mis Paris)*/
    var maison = new window.google.maps.LatLng(48.873818, 2.29498386);
	/*option par défaut de la carte*/
    var myOptions = {
      zoom:6,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      center: maison
    }
    /*creation de la map*/
   
      initGoogleMap = new window.google.maps.Map(document.getElementById("divMap"), myOptions);
	/*connexion de la map + le panneau de l'itinéraire*/
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("divRoute"));
	/*intialise le geocoder pour localiser les adresses */
	geocoder = new window.google.maps.Geocoder();
    }
    
    useEffect(() => {

        
       
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        googleMap.fitBounds(bounds); // the map to contain all markers
         
    }, [])
   
  
   
  function trouveRoute() {
  /*test si les variables sont bien initialisés*/
	if (depart && arrivee)
	{
	/*mode de transport*/
	var choixMode = document.getElementById("mode").value;
	
    var request = {
        origin:depart, 
        destination:arrivee,
        travelMode: window.google.maps.DirectionsTravelMode[choixMode]
    };
	/*appel à l'API pour tracer l'itinéraire*/
    directionsService.route(request, function(response, status) {
      if (status == window.google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
	}
  }
  
  function rechercher(src,code)
  {
    ptCheck = code; /*adresse de départ ou arrivée ? */
	if (geocoder) {
	  geocoder.geocode( { 'address': document.getElementById(src).value}, function(results, status) {
		if (status == window.google.maps.GeocoderStatus.OK) {
		 
		  /*ajoute un marqueur à l'adresse choisie*/
		  map.setCenter(results[0].geometry.location);
		  if (marker) { marker.setMap(null);}
		  marker = new window.google.maps.Marker({
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
  
 
  
  return(
    
    <div  >

      <div>
       <input />
       <input />
       <input />

      </div>
      <div>
      <input />
      <input />
      </div>
      <div>
      <input />
      <input />
      </div>
      <table>
<tr><td><b>départ: </b></td>
<td><input type="text" id="adrDep" value=""  /></td>
<td><input type="button" value="recherche" onclick="rechercher('adrDep',true)" /></td>
<td rowspan="2">
<b>Transport: </b> 
<select id="mode" onchange="calcRoute();"> 
  <option value="DRIVING">voiture</option>
  <option value="WALKING">marche</option>
  <option value="BICYCLING">vélo</option>
</select></td></tr>
<tr><td><b>arrivée: </b></td><td><input type="text" id="adrArr" value=""/></td><td><input type="button" value="recherche" onclick="rechercher('adrArr',false)"/></td></tr>
</table>
  

<div id="divMap" style="float:left;width:70%; height:80%"></div> 
<div id="divRoute" style="float:right;width:30%;height 80%"></div>
<div ref={googleMapRef}
    style={{ width: 1500, height: 1000 }} />
  </div>
  
  
  );
}

export default testnew;