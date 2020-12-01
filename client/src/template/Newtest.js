
import React, { useState, useEffect, useRef } from "react";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
      
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
        
}
};
} else {
script.onload = () => callback();
}

script.src = url;
document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
autoComplete = new window.google.maps.places.Autocomplete(
autoCompleteRef.current,
{ types: ["(cities)"], componentRestrictions: { country: "us" } }
);
autoComplete.setFields(["address_components", "formatted_address"]);
autoComplete.addListener("place_changed", () =>
handlePlaceSelect(updateQuery)
);
}

async function handlePlaceSelect(updateQuery) {
const addressObject = autoComplete.getPlace();
const query = addressObject.formatted_address;
updateQuery(query);
console.log(addressObject);
}

function Newtest() {
const [query, setQuery] = useState("");
const autoCompleteRef = useRef(null);

const GOOGLE_MAP_API_KEY = 'AIzaSyAAwFT-cjXOzNkjkxkneVulg-kiBjZlHKA';

useEffect(() => {
loadScript(
  `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`,
  () => handleScriptLoad(setQuery, autoCompleteRef)
);
}, []);

return (

    <div>
       <br />
       <br />

<div className="search-location-input">
<script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAwFT-cjXOzNkjkxkneVulg-kiBjZlHKA&libraries=places"
          onLoad={handleScriptLoad}
          ref={autoCompleteRef}
        />
  <input
    ref={autoCompleteRef}
    onChange={event => setQuery(event.target.value)}
    placeholder="Enter a City"
    value={query}
  />
</div>
</div>
);
}

export default Newtest;