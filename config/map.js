const map = {
  lat1: 48.6888545,
  lat2: 48.7765455,
  lng1: 21.188796,
  lng2: 21.323346,
};

const box = `${map.lat1},${map.lng1},${map.lat2},${map.lng2}`;

const openStreetMapDataRequest = `[out:json];(node["payment:bitcoin"="yes"](${box});node["amenity"="atm"]["currency:XBT"="yes"](${box}););out;>;`;

module.exports.map = map;
module.exports.openStreetMapDataRequest = openStreetMapDataRequest;
