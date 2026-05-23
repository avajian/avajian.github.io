/**
 * Connect to the mapbox API via public access token
 *
 * Styles the map and adds animation effect
 */

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXZhamlhbiIsImEiOiJjbXBoaWJrcXgxMGtrMnlweXFhaHp5dTVvIn0.CHSelWQsEWlEbJqy7MnRiw";
const previewMap = new mapboxgl.Map({
  container: "map-preview",
  style: "mapbox://styles/mapbox/light-v11",
  projection: "globe",
  zoom: 1,
  center: [0, 20],
  interactive: false,
});

previewMap.on("style.load", () => {
  previewMap.setFog({});
});

let spinAngle = 0;
function spinGlobe() {
  spinAngle += 0.04;
  previewMap.setCenter([spinAngle, 20]);
  requestAnimationFrame(spinGlobe);
}
spinGlobe();
