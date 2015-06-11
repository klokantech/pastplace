/* MapBox map */

var map;
var places;

function initMap(baseurl, showControls) {
  var icon = L.icon({
    iconUrl: baseurl + '/img/marker.png',
    iconSize: [44, 48],
    iconAnchor: [18, 48]
  });

  var iconActive = L.icon({
    iconUrl: baseurl + '/img/marker-blue.png',
    iconSize: [44, 48],
    iconAnchor: [18, 48]
  });

  places = new L.LayerGroup();

  L.marker([48, 21], {icon: icon}).addTo(places).on('click', markerAction);
  L.marker([52, 0], {icon: icon}).addTo(places).on('click', markerAction);
  L.marker([40, -2], {icon: icon}).addTo(places).on('click', markerAction);
  L.marker([46.9446369, 7.4487306], {icon: iconActive}).addTo(places).on('click', markerAction);

  function markerAction() {
    map.panTo(this.getLatLng());
    places.eachLayer(function(layer) {
      layer.setIcon(icon);
    });
    this.setIcon(iconActive);
  }

  var mbAttr = 'PastPlace | Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>';
  var mbUrl = 'https://{s}.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';

  var baseLayer = L.tileLayer(mbUrl, {
    id: 'pastplace.qr9c0udi',
    attribution: mbAttr,
    token: 'pk.eyJ1IjoicGFzdHBsYWNlIiwiYSI6Inl1SkV3TzAifQ.2v6hn1Z-0hiYu_eDpjsP0g',
    subdomains: ['a', 'b', 'c', 'd']
  });

  map = L.map('map', {
    center: [46.9446369, 7.4487306],
    zoom: 4,
    layers: [baseLayer],
    zoomControl: false
  });

  var baseLayers = {
    "Base map": baseLayer
  };

  var overlays = {
    "Places": places
  };

  if (showControls) {
    //draggable map
    L.control.layers(baseLayers, overlays, {
      position: 'bottomright'
    }).addTo(map);

    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);
  }else{
    //static map
    map.dragging.disable();
    //one place
    L.marker([46.9446369, 7.4487306], {icon: iconActive}).addTo(map);
  }
}