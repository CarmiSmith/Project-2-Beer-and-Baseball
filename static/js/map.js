

function buildMap(selection) {

  d3.json('http://127.0.0.1:5000/averagecity').then((data) => {
    console.log(data) // this is the data from the flask app
  
// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = averagecity.city;
var beer = averagecity.Average_Price_per_Ounce
var team = averagecity.team

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < averagecity.length; i++) {
  var city = cities[i];
  L.marker(averagecitt.City)
    .bindPopup("<h1>Team" + team + "</h1> <hr> <h3>Price of Beer Per Ounce " + beer  "</h3>")
    .addTo(myMap);
}
})
}