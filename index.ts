/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

let map: google.maps.Map, heatmap: google.maps.visualization.HeatmapLayer;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 20,
    center: { lat: -22.380545821003157, lng: -41.780388476401484 },
    mapTypeId: "satellite",
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });

  document
    .getElementById("toggle-heatmap")!
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")!
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")!
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")!
    .addEventListener("click", changeRadius);
}

setInterval(() => {
    heatmap.setData(getPoints());
 }, 4000);

function toggleHeatmap(): void {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient(): void {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius(): void {
  heatmap.set("radius", heatmap.get("radius") ? null : 15);
}

function changeOpacity(): void {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.4);
}

// Heatmap data: 500 Points
function getPoints() {
    const a = { lat: -22.38084271817004, lng: -41.78045631643171 };
    const b = { lat: -22.380726770301877, lng: -41.78014719185411 };
    const c = { lat: -22.380198493221595, lng: -41.78037585016787 };
    const d = { lat: -22.380293360027274, lng: -41.78068229254109 };
    const numPoints = 500;
    const points = [];
  
    for (let i = 0; i < numPoints; i++) {
      const randomLat = Math.random() * (a.lat - b.lat) + b.lat;
      const randomLng = Math.random() * (d.lng - a.lng) + a.lng;
  
      points.push(new google.maps.LatLng(randomLat, randomLng));
    }
  
    return points;
  }
declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
