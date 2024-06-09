var map = L.map('map');
map.setView([23.815316799980515, 90.42550295035603], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var points = L.geoJSON(points).addTo(map);
pointIndex = leafletKnn(points);
map.on(`click`, function (ev) {
  var nearestResult = pointIndex.nearest(ev.latlng, 1)[0];
  nearestResult.layer.bindPopup('i am the nearest');
});

L.control.locate().addTo(map);

// var marker1 = L.marker([23.815316799980515, 90.42550295035603]).addTo(map);
var evercareHospital = L.marker([23.81023, 90.4312]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.73907, 90.39648]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.8142, 90.39807]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.80481, 90.41563]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.81933, 90.4097]).addTo(map);
var birdemGeneralHospiotal = L.marker([23.8102, 90.43126]).addTo(map);

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
]).addTo(map);

evercareHospital.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
circle.bindPopup('I am a circle.');
polygon.bindPopup('I am a polygon.');

function onMapClick(e) {
  alert('You clicked the map at ' + e.latlng);
}

map.on('click', onMapClick);

L.Routing.control({
  waypoints: [L.latlng(23.81023, 90.4312), L.latlng(23.73907, 90.39648)],
}).addTo(map);
