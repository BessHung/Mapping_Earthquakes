// --------GeoJSON--------

// 13.5.5 Accessing the Toronto airline routes GeoJSON URL.
let torontoData ="https://raw.githubusercontent.com/BessHung/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON_Linestrings/torontoRoutes.json";

// d3.json(torontoData).then(function(data){
//   console.log(data);
//   L.geoJSON(data,{
//     color:"#ffffa1",
//     weight:2,
//     onEachFeature: function(feature, layer){
//       layer.bindPopup(`<h2>Airline: ${feature.properties.airline}</h2><hr><h3>Destination: ${feature.properties.dst}</h3>`);
//     }
//   }).addTo(map);
// });


// or ------ Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

d3.json(torontoData).then(function(data){
  console.log(data);
  L.geoJSON(data,{
    style: myStyle,
    onEachFeature: function(feature, layer){
      layer.bindPopup(`<h2>Airline: ${feature.properties.airline}</h2><hr><h3>Destination: ${feature.properties.dst}</h3>`);
    }
  }).addTo(map);
});

// Use the Leaflet Documentation  
// We create the tile layer that will be the background of our map.
var light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let baseMaps ={
  Light: light,
  Dark: dark
};

// Create the map object with a center and zoom level.
var map = L.map("mapid", {
  center: [44.0, -80.0],
  zoom: 3,
  layers:[light]
});

L.control.layers(baseMaps).addTo(map);
