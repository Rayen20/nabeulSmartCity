import React, { useEffect, useRef ,useState} from 'react';

const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    fetch("/mark")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
  }, []);


  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 36.4619, lng: 10.7327248 },
      zoom: 5
    });
  }

  // create marker on google map
  const createMarker = (markerObj) => new window.google.maps.Marker({
    position: { lat: markerObj.lat, lng: markerObj.lng },
    map: googleMap,
    icon: {
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    }
  });

  return( <div
    ref={googleMapRef}
    style={{ width: 1500, height: 1000 }}
  
  /> 
  
  );
}

export default GMap;