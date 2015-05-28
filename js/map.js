/* MapBox map */

L.mapbox.accessToken = 'pk.eyJ1IjoiZGFsaWJvcmphbmFrIiwiYSI6IktJZnRiUEUifQ.S66RjNGVR8-J1wsY7f7Htg';
var map = L.mapbox.map('map', 'mapbox.streets')
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