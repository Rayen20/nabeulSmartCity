import { GoogleMap,   InfoWindow,LoadScript, Marker ,  useLoadScript} from '@react-google-maps/api';
import React,{ useState,useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
//import CurrentLocation from './CurrentLocation';
import { formatRelative } from "date-fns";
const libraries = ["places"];

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
 
  disableDefaultUI: true,
  zoomControl: true,
};

export default function  Newdemo ()   {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
 

  var [ state, setState ] = useState(null);
    const [ selected, setSelected ] = useState(null);
    const [data, setData] = useState([] );

    const [dat, setDat] = useState([] );

  
    const onMapClick = React.useCallback((e) => {
      setDat((current) => [
        ...current,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          time: new Date(),
        },
      ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
      mapRef.current = map;
    }, []);
  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng})
  };

    const [ currentPosition, setCurrentPosition ] = useState({});

    const success = position => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCurrentPosition(currentPosition);
    };

   
    
    useEffect(() => {
      //onClose();
     
      navigator.geolocation.getCurrentPosition(success);
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        });
      }
     
      fetch("/markers/mark")
      .then((res) => {
       
        return res.json();
        
        
      })
      .then((data) => {
        setData(data);
        data.map(item => { return item.lat,
          console.log(item.location)
        });
        console.log(data);
       
        /*googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        data.map(x => {
          const marker = createMarker(x);
          bounds.extend(marker.position);
        });
        googleMap.fitBounds(bounds);*/
        console.log(data.lat);
       
        // the map to contain all markers
        return  setData(data);
     
       

      })

      fetch("/markers/mark/get")
      .then((res) => {
       
        return res.json();
        
        
      })
      .then((dat) => {
        setDat(dat);
        dat.map(item => { return item.lat,
          console.log(item)
        });
        console.log(dat);
        //onMarkerClick (dat.item,dat.item);
       
        /*googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        data.map(x => {
          const marker = createMarker(x);
          bounds.extend(marker.position);
        });
        googleMap.fitBounds(bounds);*/
        console.log(dat.lat);
       
        // the map to contain all markers
        return  setDat(dat);
     
       

      })
      
      
      
    },[])
    console.log(dat);



    
      
     
    const mapStyles = {        
      height: "80vh",
      width: "100%"};
    
    const defaultCenter = {
      lat: 41.3851, lng: 2.1734
    }
   
    
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    return (
     
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <Row>
        <Col xs="6">
       
          <GoogleMap
          id="map"
          options={options}
       onClick={onMapClick}
       onLoad={onMapLoad}
            mapContainerStyle={mapStyles}
            zoom={13}
          
            center={currentPosition}>
                
        {
            currentPosition.lat  ? 
           
              <Marker position={currentPosition}
              onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} 
           
            
            /> : null
            
        }
        {
           dat.map((item )=> (
          
              
            <Marker 
            
            key={`${item.lat}-${item.lng}`}
            position={{ lat: item.lat, lng: item.lng }}
            name={'Kenyatta International Convention Centre'}
          
           onClick={() => {
            setSelected(item);
          }}
          icon={{
            url: `/bear.svg`,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30),
          }}
           
            />
              
            )
          )
         }
         
         {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span role="img" aria-label="bear">
                  🐻
                </span>{" "}
                Alert
              </h2>
              <p>Spotted vhgv</p>
            </div>
          </InfoWindow>
        ) : null}
             
        
            

            </GoogleMap>
         
     
       </Col>
       <Col xs="6">
       <div >
      
      <form></form>
   
       </div>
       </Col>
       </Row>
      
       </div>
     
    )
  }

 