// --------GeoJSON--------

// Accessing Past 7 Days All Earthquakes data
let url ="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function(data){
  console.log(data);

  // This function returns the style data for each of the earthquakes we plot on
  // the map. We pass the magnitude of the earthquake into a function
  // to calculate the radius.
  function styleInfo(feature){
    return{
      opacity:1,
      fillOpacity:1,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke:true,
      weight:0.5
      
    };
  
    function getRadius(magnitude){
    
      if(magnitude === 0){
        return 1;
      } 
      return magnitude *4;
      }
  };
  
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature,latling) {
      return L.circleMarker(latling);
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo
  }).addTo(map);
});

// Use the Leaflet Documentation  
// We create the tile layer that will be the background of our map.
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps ={
  Streets: streets,
  SatelliteStreets: satelliteStreets
};

// Create the map object with a center and zoom level.
var map = L.map("mapid", {
  center: [39.5, -98.5],
  zoom: 3,
  layers:[streets]
});

L.control.layers(baseMaps).addTo(map);
