// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// var mymap = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
var map = L.map("mapid", {
    center: [
      40.07232511191709, -101.03118248038594
    ],
    zoom: 5
  });


//  --------Add a single marker to the map for Los Angeles, California.-----
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// ---circle---
// L.circle([34.0522, -118.2437], {
//   radius: 300,
//   fillColor: '#ffffa1',
//   color:'black'
// }).addTo(map);

// ---circleMarker---
// L.circleMarker([34.0522, -118.2437], {
//   radius: 300,
//   fillColor: '#ffffa1',
//   color:'black'
// }).addTo(map);

// Get data from cities.js
let cityData = cities;

// --------multiple markers: Loop through the cities array and create one marker for each city.------
// cityData.forEach(function(city){
//   console.log(city);
//   L.marker(city.location)
//   .bindPopup(`<h2> ${city.city}, ${city.state}</h2> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
//   .addTo(map);
// });

// ---circleMarker---
// cityData.forEach(function(city){
//   console.log(city);
//   L.circleMarker(city.location, {
//       radius: city.population/200000,
//       lineweight:4,
//       fillColor: 'yellow',
//       color:'orange'
//     })
//   .bindPopup(`<h2> ${city.city}, ${city.state}</h2> <hr> <h3>Population ${city.population.toLocaleString()}</h3>`)
//   .addTo(map);
// });

// --------add lines in map ------------
// single line: Coordinates for each point to be used in the line.
// let line = [
//   [33.9416,-118.4085],
//   [37.6213,-122.3790]
// ];

// L.polyline(line,{
//   color:"red"
// }).addTo(map);

// multiple lines
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// L.polyline(line,{
//   color:"yellow"
// }).addTo(map);

// skill drill
let line =[
  [39.37677196293772, -122.38005251616829],
  [30.197610175245632, -97.66622415715328],
  [43.677911565759906, -79.62426180322181],
  [40.641416913053455, -73.77781723774388]
];

L.polyline(line,{
  color:"blue",
  opacity: 0.5,
  weight: 4
}).addTo(map);


// Use the Leaflet Documentation  
// We create the tile layer that will be the background of our map.
var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
light.addTo(map);


// Use the Mapbox Styles API - Static Tiles API format
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);
