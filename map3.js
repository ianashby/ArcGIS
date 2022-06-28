require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
], function (esriConfig, Map, MapView, FeatureLayer) {

    esriConfig.apiKey = "AAPKf250a14308274e28a7e1fe2f8385106dSMRJ02w3oLidoyW1UMRrNAP-vA5EBsxB2P6nLjbQWkkGkncF1tTn5G7LbcL0nmPI";

    const map = new Map({
        basemap: "arcgis-topographic",
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
   
    const point = { //Create a point
       type: "point",
       longitude: 44.35,
       latitude: -68.21
    };
    const simpleMarkerSymbol = {
       type: "simple-marker",
       color: [226, 119, 40],  // Orange
       outline: {
           color: [255, 255, 255], // White
           width: 1
       }
    };
   
    const pointGraphic = new Graphic({
       geometry: point,
       symbol: simpleMarkerSymbol,
    });
    graphicsLayer.add(pointGraphic);

    map.add(trailheadsLayer);


});