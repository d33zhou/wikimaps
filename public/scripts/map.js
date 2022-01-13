const map = L.map('map').setView([43.657572963908336, -79.41145185759068], 12);

// google map tile
L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 18,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
}).addTo(map);
