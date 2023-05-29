<template>
  <a-layout
    :style="{
      background: '#fff',
      padding: '0px',
      margin: 0,
      minHeight: '280px',
    }"
  >
    <a-layout-content>
      <div id="map" class="openlayer"></div>
      <div style="display: none;">
      <!-- Clickable label for Vienna -->
      <a class="overlay" id="vienna" target="_blank" href="http://localhost:8081/main/echart/echart1">灌区</a>
      <div id="marker" title="Marker"></div>
      <!-- Popup -->
      <div id="popup"></div>
    </div>
      <!-- Pointer events polyfill for old browsers, see https://caniuse.com/#feat=pointer -->

      <div id="mouse-position">经纬度：</div>
      <form>
        <label for="type">绘制类型 &nbsp;</label>
        <select id="type">
          <option value="None">None</option>
          <option value="LineString">字</option>
          <option value="Polygon">面</option>
          <option value="Circle">圆</option>
        </select>
      </form>
    </a-layout-content>
  </a-layout>
</template>


  <script>
import "ol/ol.css";
import Map from "ol/Map";
import MousePosition from "ol/control/MousePosition";
import OSM from "ol/source/OSM";
import { fromLonLat, toLonLat } from "ol/proj.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import Overlay from "ol/Overlay.js";
import { toStringHDMS } from "ol/coordinate.js";
import { Vector as VectorSource } from "ol/source.js";
import Feature from "ol/Feature";
import Draw from "ol/interaction/Draw.js";
import { Circle, Fill, Stroke, Style, Icon } from "ol/style.js";

import GeoJSON from "ol/format/GeoJSON.js";
import { DragBox, Select } from "ol/interaction.js";
import { platformModifierKeyOnly } from "ol/events/condition.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "elm-pep";
import Point from "ol/geom/Point.js";
import TileJSON from "ol/source/TileJSON.js";

import TileWMS from "ol/source/TileWMS.js";
import View from "ol/View";
import { createStringXY } from "ol/coordinate";
import {
  ZoomToExtent,
  FullScreen,
  defaults as defaultControls,
} from "ol/control.js";
import png from "./icon.png"


export default {
  data() {
    return {
      openMap: null,
      popup: null,
      shopPopup: false,
      png,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const attributions =
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
        '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

      //mousedown
      const mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(4),
        projection: "EPSG:4326",
        // comment the following two lines to have the mouse position
        // be placed within the map.
        className: "custom-mouse-position",
        target: document.getElementById("mouse-position"),
      });

      //view
      const view = new View({
        center: fromLonLat([120.12, 30.42]),
        zoom: 1,
        minZoom: 1,
        maxZoom: 6,
      });

      //
      /* const vectorSource = new VectorSource({
        url: "https://openlayers.org/data/vector/ecoregions.json",
        format: new GeoJSON(),
      });
      const style = new Style({
        fill: new Fill({
          color: "#eeeeee",
        }),
      }); */

      //icon

      //手绘
      const source = new VectorSource({ wrapX: false });
      const vector = new VectorLayer({
        source: source,
        style: {
          "fill-color": "rgba(255, 255, 255, 0.2)",
          "stroke-color": "#ffcc33",
          "stroke-width": 5,
          "circle-radius": 7,
          "circle-fill-color": "#ffcc33",
        },
      });

      //Icon,feature
      
      //vector layer
      /* const style = new Style({
        fill: new Fill({
          color: "#eeeeee",
        }),
      });

      const vector = new VectorLayer({
        source: new VectorSource({
          url: "https://openlayers.org/data/vector/ecoregions.json",
          format: new GeoJSON(),
        }),
        background: "white",
        style: function (feature) {
          const color = feature.get("COLOR") || "#eeeeee";
          style.getFill().setColor(color);
          return style;
        },
      }); */

      const map = new Map({
        controls: defaultControls().extend([
          mousePositionControl,
          new FullScreen(),
          new ZoomToExtent({
            extent: [
              11310835.1781, 4010491.4533, 14211136.0133, 4010491.4533,
              11310835.1781, 3034890.0888, 14211136.0133, 3034890.0888,
            ],
          }),
        ]),
        layers: [
          new TileLayer({
            source: new OSM({
              attributions: attributions,
              maxZoom: 5,
            }),
          }),
          new TileLayer({
            source: new TileWMS({
              projection: "EPSG:3857", // here is the source projection
              url: "http://localhost:8080/geoserver/test/wms",
              params: {
                LAYERS: "test:hn-8-3857",
              },
            }),
          }),
          vector,
        ],
        target: document.getElementById('map'),
        view: view,
      });

      /* const selectedStyle = new Style({
        fill: new Fill({
          color: "rgba(255, 255, 255, 0.6)",
        }),
        stroke: new Stroke({
          color: "rgba(255, 255, 255, 0.7)",
          width: 2,
        }),
      });

      // a normal select interaction to handle click
      const select = new Select({
        style: function (feature) {
          const color = feature.get("COLOR_BIO") || "#eeeeee";
          selectedStyle.getFill().setColor(color);
          return selectedStyle;
        },
      });
      map.addInteraction(select);

      const selectedFeatures = select.getFeatures();

      // a DragBox interaction used to select features by drawing boxes
      const dragBox = new DragBox({
        condition: platformModifierKeyOnly,
      });

      map.addInteraction(dragBox);

      dragBox.on("boxend", function () {
        const extent = dragBox.getGeometry().getExtent();
        const boxFeatures = vectorSource
          .getFeaturesInExtent(extent)
          .filter((feature) => feature.getGeometry().intersectsExtent(extent));

        // features that intersect the box geometry are added to the
        // collection of selected features

        // if the view is not obliquely rotated the box geometry and
        // its extent are equalivalent so intersecting features can
        // be added directly to the collection
        const rotation = map.getView().getRotation();
        const oblique = rotation % (Math.PI / 2) !== 0;

        // when the view is obliquely rotated the box extent will
        // exceed its geometry so both the box and the candidate
        // feature geometries are rotated around a common anchor
        // to confirm that, with the box geometry aligned with its
        // extent, the geometries intersect
        if (oblique) {
          const anchor = [0, 0];
          const geometry = dragBox.getGeometry().clone();
          geometry.rotate(-rotation, anchor);
          const extent = geometry.getExtent();
          boxFeatures.forEach(function (feature) {
            const geometry = feature.getGeometry().clone();
            geometry.rotate(-rotation, anchor);
            if (geometry.intersectsExtent(extent)) {
              selectedFeatures.push(feature);
            }
          });
        } else {
          selectedFeatures.extend(boxFeatures);
        }
      });

      // clear selection when drawing a new box and when clicking on the map
      dragBox.on("boxstart", function () {
        selectedFeatures.clear();
      });

      const infoBox = document.getElementById("info");

      selectedFeatures.on(["add", "remove"], function () {
        const names = selectedFeatures.getArray().map(function (feature) {
          return feature.get("ECO_NAME");
        });
        if (names.length > 0) {
          infoBox.innerHTML = names.join(", ");
        } else {
          infoBox.innerHTML = "None";
        }
      }); */

      const typeSelect = document.getElementById("type");

      let draw; // global so we can remove it later
      function addInteraction() {
        const value = typeSelect.value;
        if (value !== "None") {
          draw = new Draw({
            source: source,
            type: typeSelect.value,
            freehand: true,
          });
          map.addInteraction(draw);
        }
      }

      /**
       * Handle change event.
       */
      typeSelect.onchange = function () {
        map.removeInteraction(draw);
        addInteraction();
      };

      addInteraction();

      //overlay
      const pos = fromLonLat([113.32, 34.10]);

      // Vienna marker
      const marker = new Overlay({
        position: pos,
        positioning: "center-center",
        element: document.getElementById("marker"),
        stopEvent: false,
      });
      map.addOverlay(marker);

      // Vienna label
      const vienna = new Overlay({
        position: pos,
        element: document.getElementById("vienna"),
      });
      map.addOverlay(vienna);

      /* this.setMarker();
      this.addOverlay();
      this.singleclick();
      this.pointermove();  */

      /* const map2 = new Map({
        layers: [vector],
        target: "map2",
        view: new View({
          center: [0, 0],
          zoom: 2,
        }),
      }); */

      //mousedown
      const projectionSelect = document.getElementById("projection");
      projectionSelect.addEventListener("change", function (event) {
        mousePositionControl.setProjection(event.target.value);
      });

      const precisionInput = document.getElementById("precision");
      precisionInput.addEventListener("change", function (event) {
        const format = createStringXY(event.target.valueAsNumber);
        mousePositionControl.setCoordinateFormat(format);
      });

      //select
      /* let select = null; // ref to currently selected interaction

      const selected = new Style({
        fill: new Fill({
          color: "#eeeeee",
        }),
        stroke: new Stroke({
          color: "rgba(255, 255, 255, 0.7)",
          width: 2,
        }),
      });

      function selectStyle(feature) {
        const color = feature.get("COLOR") || "#eeeeee";
        selected.getFill().setColor(color);
        return selected;
      }

      // select interaction working on "singleclick"
      const selectSingleClick = new Select({ style: selectStyle });

      // select interaction working on "click"
      const selectClick = new Select({
        condition: click,
        style: selectStyle,
      });

      // select interaction working on "pointermove"
      const selectPointerMove = new Select({
        condition: pointerMove,
        style: selectStyle,
      });

      const selectAltClick = new Select({
        style: selectStyle,
        condition: function (mapBrowserEvent) {
          return click(mapBrowserEvent) && altKeyOnly(mapBrowserEvent);
        },
      });

      const selectElement = document.getElementById("type");

      const changeInteraction = function () {
        if (select !== null) {
          map.removeInteraction(select);
        }
        const value = selectElement.value;
        if (value == "singleclick") {
          select = selectSingleClick;
        } else if (value == "click") {
          select = selectClick;
        } else if (value == "pointermove") {
          select = selectPointerMove;
        } else if (value == "altclick") {
          select = selectAltClick;
        } else {
          select = null;
        }
        if (select !== null) {
          map.addInteraction(select);
          select.on("select", function (e) {
            document.getElementById("status").innerHTML =
              "&nbsp;" +
              e.target.getFeatures().getLength() +
              " selected features (last operation selected " +
              e.selected.length +
              " and deselected " +
              e.deselected.length +
              " features)";
          });
        }
      };

      
       // onchange callback on the select element.
      
      selectElement.onchange = changeInteraction;
      changeInteraction(); */

      console.log("init finished");
    },

    /* setMarker() {
      let _style = new Style({
        image: new sCircle({
          radius: 10,
          stroke: new Stroke({
            color: "#fff",
          }),
          fill: new Fill({
            color: "#3399CC",
          }),
        }),
      });
      let _feature = new Feature({
        geometry: new Point(olProj.fromLonLat([108.945951, 34.465262])),
      });
      _feature.setStyle(_style);
      let _marker = new VectorLayer({
        source: new VectorSource({
          features: [_feature],
        }),
      });
      this.openMap.addLayer(_marker);
    },
    addOverlay() {
      // 创建Overlay
      let elPopup = this.$refs.popup;
      this.popup = new Overlay({
        element: elPopup,
        positioning: "bottom-center",
        stopEvent: false,
        offset: [0, -20],
      });
      this.openMap.addOverlay(this.popup);
    },
    singleclick() {
      // 点击
      this.openMap.on("singleclick", (e) => {
        // 判断是否点击在点上
        let feature = this.openMap.forEachFeatureAtPixel(
          e.pixel,
          (feature) => feature
        );
        console.log(feature);
        if (feature) {
          this.shopPopup = true;
          // 设置弹窗位置
          let coordinates = feature.getGeometry().getCoordinates();
          this.popup.setPosition(coordinates);
        } else {
          this.shopPopup = false;
        }
      });
    },
    pointermove() {
      this.openMap.on("pointermove", (e) => {
        if (this.openMap.hasFeatureAtPixel(e.pixel)) {
          this.openMap.getViewport().style.cursor = "pointer";
        } else {
          this.openMap.getViewport().style.cursor = "inherit";
        }
      });
    }, */
  },
};
</script>
  <style>
.openlayer {
  width: 100%;
  height: 400px;
}
.map {
  width: 100%;
  height: 400px;
}
#marker {
  width: 20px;
  height: 20px;
  border: 1px solid #088;
  border-radius: 10px;
  background-color: #0ff;
  opacity: 0.5;
}
#vienna {
  text-decoration: none;
  color: white;
  font-size: 11pt;
  font-weight: bold;
  text-shadow: black 0.1em 0.1em 0.2em;
}
.popover-body {
  min-width: 276px;
} 
</style>
  