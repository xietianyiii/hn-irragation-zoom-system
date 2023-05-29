<template>
  <a-layout-content>
    <div class="mapbox">
        <div id="map" ></div>
    </div>
  </a-layout-content>
</template>

  

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "mapbox",
  data() {
    return {
      msg: "Welcome to MapBox~",
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiMTA2MzgxNjE3OCIsImEiOiJjbGhyZzRnbjMwZGtrM2VzaTg4a3Z1d2I1In0.G4AQfmjpfeOjf7YJVytWhA";

    const map = new mapboxgl.Map({
      container: "map", // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/examples/clg45vm7400c501pfubolb0xz", // style URL
      center: [121.387899486, 31.09916171], // starting position [lng, lat]
      zoom: 3, // starting zoom
    });

    map.on("load", () => {
      map.addSource("henan-2g8go7", {
        type: "vector",
        // Use any Mapbox-hosted tileset using its tileset id.
        // Learn more about where to find a tileset id:
        // https://docs.mapbox.com/help/glossary/tileset-id/
        url: "mapbox://1063816178.27r6tp5h",
      });
      map.addLayer({
        id: "1063816178.27r6tp5h",
        type: "line",
        source: "henan-2g8go7",
        "source-layer": "henan-2g8go7",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "black",
          "line-width": 3,
        },
      });
    });

    
  },
};
</script>




<style>
.mapbox {
  width: 100%;
  height: 100%;
}
#map {
        left: 300px;
        width: 100%;
        height: 500px;
      }
.marker {
  background-image: url("@/assets/image/定位.png");
  background-size: cover;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}
.mapboxgl-popup {
  max-width: 200px;
}
.mapboxgl-popup-content {
  text-align: center;
  font-family: "Open Sans", sans-serif;
}
</style>
    