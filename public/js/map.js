 
const map = L.map('map').setView([coordinates[1], coordinates[0]], 9);//[lat, lng] for leaflet

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);


L.marker([coordinates[1], coordinates[0]])
  .addTo(map)
  .bindPopup(`<b>${listingTitle}</b><p>Exact Location will be provided after booking</p>`)
  .openPopup();