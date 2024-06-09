var map = L.map('map');
map.setView([23.815316799980515, 90.42550295035603], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var own = L.control.locate().addTo(map);
console.log(own);
// var marker1 = L.marker([23.815316799980515, 90.42550295035603]).addTo(map);
var evercareHospital = L.marker([23.81023, 90.4312]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.73907, 90.39648]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.8142, 90.39807]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.80481, 90.41563]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.81933, 90.4097]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.8102, 90.43126]).addTo(map);
var DMH = L.marker([23.72574, 90.39769]).addTo(map);
var IBN = L.marker([23.77809, 90.36206]).addTo(map);
var LBID = L.marker([23.79869, 90.35382]).addTo(map);
var SQUARE = L.marker([23.8162366, 90.3658265]).addTo(map);

var circle = L.circle([23.815316799980515, 90.42550295035603], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 300,
}).addTo(map);

var polygon = L.polygon([
  [23.81023, 90.4312],
  [23.73907, 90.39648],
  [23.8142, 90.39807],
  [23.80481, 90.41563],
  [23.81933, 90.4097],
  [23.8102, 90.43126],
  [23.72574, 90.39769],
  [23.77809, 90.36206],
  [23.79869, 90.35382],
  [23.8162366, 90.3658265],
]).addTo(map);
LBID.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
circle.bindPopup('I am a circle.');
polygon.bindPopup('I am a polygon.');

function onMapClick(e) {
  alert('You clicked the map at ' + e.latlng);
}
map.on('click', onMapClick);
