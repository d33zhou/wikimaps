
const map = L.map('map').setView([43.657572963908336, -79.41145185759068], 12);

// google map tile
L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  maxZoom: 18,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
}).addTo(map);

// add a marker
// const marker = L.marker([51.5, -0.09]).addTo(map);
// add popup to marker
// marker.bindPopup('Hello there!');

// add marker set
// const locations = (db) => {
//   const queryString = `
//       SELECT maps.*,
//         users.name AS created_by,
//         points.title AS point_name,
//         points.description AS point_description,
//         points.image AS point_img,
//         points.latitude AS latitude,
//         points.longitude AS longitude
//       FROM maps
//        JOIN users ON users.id = maps.creator_id
//        JOIN points ON points.creator_id = maps.creator_id
//        WHERE maps.id = $1
//        ORDER BY maps.id;
//       `;

//   return db.query(queryString, [3])
//     .then((result) => result.rows)
//     .catch((err) => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// };

// console.log(locations());

// for (let i = 0; i < locations.length; i++) {
//   console.log(locations[i].lat);
//   marker = new L.marker([locations[i].lat, locations[i].lon])
//     .bindPopup(`${locations[i].user_id}`)
//     .addTo(map);
// }

// // adds popup with lat and long
// const popup = L.popup();

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent(`You clicked the map at ${e.latlng.toString()}`)
//     .openOn(map);

//   console.log(e.latlng);
// }
// map.on('click', onMapClick);
