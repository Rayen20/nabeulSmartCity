import React ,{useState,useEffect,useRef}from "react";
//import react-dom from "react-dom";

import {
  GoogleMap,
  LoadScript,
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


import "@reach/combobox/styles.css";

import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
//import CurrentLocation from './CurrentLocation';
import { formatRelative } from "date-fns";
const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};




export const  Ddemo = ({ array, isAdding, getLocation }) =>  {

 
  const googleMapRef = useRef(null);
  var [ state, setState ] = useState(null);
    const [ selected, setSelected ] = useState(null);
    const [data, setData] = useState([] );

    const [dat, setDat] = useState([] );

  
    
   /* const onMapLoad = React.useCallback((map) => {
      googleMapRef.current = map;
    }, []);
    const tab  = {};
    const tabb  = {};
     state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
  
   function onMarkerClick  (props, marker) {
     if (state) {
   setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true

    })
    
    console.log("dat");
    ;}}*/
  
  /*const onClose = props => {
    if (state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };*/
    let googleMap = null;
   

    /*const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/markers/mark',
      );
      console.log(data)
      setData(result.data);
      console.log(result.json);
    };*/
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

  function info(){
    let infowindow = new window.google.maps.InfoWindow();
  
  for (let i =0; i < dat.length ;i++){
    dat.map(item => { return item.lat,

     
      console.log("yugyjhuyg")
    });
  }
}
    const success = position => {
      const currentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      setCurrentPosition(currentPosition);
    };

    const onSelect  = (item) => {
      setSelected(item);
    }
    
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
const l = [];



 const objectKey = [{}];
    console.log(data.lat)
    const loc =[ {
      name: "Location 1",
      location: { 
    
      }
    } ]
const ll = []
 console.log (loc.location )
 ll.map(element =>  {return(
  data.map(item => {return element = item.lat}),
  element
  )
 });  
console.log(ll)
    data.map(item => {return (  
      objectKey.map(x => { x =item}) ,
      
     /*  loc.forEach(element =>   

       
       element.location.lat = item.lat,
       
      
       
       
       ),
       loc.forEach(element =>   

        element.location.lng = item.lng,
        
       
        
        
        );*/
      console.log(item),
      console.log(objectKey)
    
    )});
  /* loc.map(x => {return x.name ,
    console.log(x.location)}
    );
    
    console.log(loc.location)
    
    data.map(x => {return x.lat ,

      tab [x]= x.lat,
      tabb[x] = x.lng,
      console.log(tab),
      console.log(tabb)
    
      
    }
      );*/
      
     
  
  
    loc.map(x => {
      return x.location.lat = data.map(item => {return item.lat}),
      x.location.lng =data.map(item => {return item.lng}),
      console.log(loc)
    
    });

    console.log(loc)

    const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 2.162 ,
            lng: 2.162 
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: data.lat,
            lng: data.lng
          },
        },
        {
          name: "Location 3",
          location: { 
            lat: 41.3773,
            lng: 2.1585
          },
        },
        {
          name: "Location 4",
          location: { 
            lat: 41.3797,
            lng: 2.1682
          },
        },
        {
          name: "Location 5",
          location: { 
            lat: 41.4055,
            lng: 2.1915
          },
        }
      ];

      console.log(objectKey)
      console.log(dat)
      locations.map(x => {return x.name ,
        console.log(x.location)}
        );
        const footer = (
          <div className="footer">
            <div className="inner-footer">
            <span className="location-text">Choose location and press</span>
            <Button variant="contained" color="primary" onClick={() => getLocation(currentPosition)}>
              Next
            </Button>
            </div>
          </div>
        );

        function markerClicked(marker) {
          console.log('marker', marker);
          this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
        
          });
       };
    const mapStyles = {        
      height: "80vh",
      width: "100%"};
    
    const defaultCenter = {
      lat: 41.3851, lng: 2.1734
    }
    const createMarker = (dataa) => new window.google.maps.Marker({
      position: { lat: dataa.lat, lng: dataa.lng },
      map: googleMap,
      icon: {
        url: dataa.icon,
        // set marker width and height
        scaledSize: new window.google.maps.Size(100, 100)
      }
    });
    const onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    return (
      <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <Row>
        <Col xs="6">
       <LoadScript    id="script-loader"
         googleMapsApiKey='AIzaSyAAwFT-cjXOzNkjkxkneVulg-kiBjZlHKB'>
          <GoogleMap
          id="map"
       onClick={onMapClick}
   
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
           dat.map(item => {
            return (
              
            <Marker 
            
            key={`${item.lat}-${item.lng}`}
            position={item}
            name={'Kenyatta International Convention Centre'}
           icon={ "images/placeholde.png"}
           onClick={() => {
            setSelected(item);
          }}
          
           
            />
              
            )
          })
         }
         
         {selected ? (
          <InfoWindow
          position={{
            lat: selected.lat,
            lng: selected.lng
         }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>
                <span  aria-label="bear">
                  🐻
                </span>{" "}
                Alert
              </h2>
              <p>Latitude is : {selected.lat}
           Langitude is : {selected.lng}</p>
            </div>
          </InfoWindow>
        ) : null}
             
        
            

            </GoogleMap>
         
       </LoadScript>
       </Col>
       <Col xs="6">
       <div >
      
      <form></form>
   
       </div>
       </Col>
       </Row>
       {
        isAdding ?
        footer :
        null
      }
       </div>
       </>
    )
  }

 