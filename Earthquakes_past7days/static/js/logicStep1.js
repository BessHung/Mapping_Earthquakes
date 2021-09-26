// --------GeoJSON--------

// 13.5.5 Accessing the Toronto airline routes GeoJSON URL.
let url ="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// or ------ Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor:"#ffffa1",
  fillOpacity: 0.2,
  weight: 1
}

d3.json(url).then(function(data){
  console.log(data);
  L.geoJSON(data).addTo(map);
});

// {
//   style: myStyle,
//   onEachFeature: function(feature, layer){
//     layer.bindPopup(`<h2>Neighborhood: ${feature.properties.AREA_NAME}</h2>`);
//   }
// }

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
