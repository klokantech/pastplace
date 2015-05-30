/* MapBox map */

L.mapbox.accessToken = 'pk.eyJ1IjoicGFzdHBsYWNlIiwiYSI6Inl1SkV3TzAifQ.2v6hn1Z-0hiYu_eDpjsP0g';
var map = L.mapbox.map('map', 'pastplace.qr9c0udi')
        .setView([48, 21], 4);

L.marker([48, 21], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#574f45'
  })
}).addTo(map);

L.marker([52, 0], {
  icon: L.mapbox.marker.icon({
    'marker-color': '#574f45'
  })
}).addTo(map);
