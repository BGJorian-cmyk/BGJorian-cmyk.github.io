function initMap() {
const center = { lat: 41.8781, lng: -87.6298 };

 const map = new google.maps.Map(document.getElementById("googleMap"), {

  zoom: 12,
  center: center,
});


const marker = new google.maps.Marker({
  position: center,
  map: map,
  title: "My Location",
  icon: {
    url: "Needle_7.webp",
    scaledSize: new google.maps.Size(45,45),
  },
});


const routeCoordinates = [
  {lat: 41.8781, lng: -87.6298},
  {lat: 41.8827, lng: -87.6233},
  {lat: 41.8917, lng: -87.6086}
];

const routePath = new google.maps.Polyline ({
    path: routeCoordinates,
    geodestic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });

  routePath.setMap(map);

  const areaCoords = [
  {lat: 41.885, lng: -87.635},
  {lat: 41.885, lng: -87.615},
  {lat: 41.870, lng: -87.615},
  {lat: 41.870, lng: -87.635}
  ];

  const customArea = new google.maps.Polygon({
    paths: areaCoords,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.25,
    title: "Line to Navy Pier",
  });

  customArea.setMap(map);

  const highlightBox = new google.maps.Rectangle({
    strokeColor: "#FFA500",
    strokeOpacity: 0.9,
    strokeWeight: 2,
    fillColor: "#FFA500",
    fillOpacity: 0.2,
    map: map,
    bounds: {
      north: 41.8915,
      south: 41.8755,
      east: -87.6380,
      west: -87.6670,
    }
  });
  const questionButton = document.getElementById("questionBtn");

  questionButton.addEventListener("click", function() {
    alert("If you have questions, contact me at:\nJhouston2@hawk.illinoistech.edu")
  });
}
