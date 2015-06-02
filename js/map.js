/* MapBox map */

L.mapbox.accessToken = 'pk.eyJ1IjoicGFzdHBsYWNlIiwiYSI6Inl1SkV3TzAifQ.2v6hn1Z-0hiYu_eDpjsP0g';
var map = L.mapbox.map('map', 'pastplace.qr9c0udi', {zoomControl: false})
        .setView([48, 21], 4);

var icon = L.icon({
  iconUrl: '/img/marker.png',
  iconSize: [44, 48],
  iconAnchor: [18, 48]
});


var iconActive = L.icon({
  iconUrl: '/img/marker-blue.png',
  iconSize: [44, 48],
  iconAnchor: [18, 48]
});

L.marker([48, 21], {icon: icon}).addTo(map);
L.marker([52, 0], {icon: icon}).addTo(map);
L.marker([46.9446369, 7.4487306], {icon: iconActive}).addTo(map);

L.control.zoom({
  position: 'bottomright'
}).addTo(map);