require([
   "esri/config",
   "esri/Map",
   "esri/views/MapView",
   "esri/layers/FeatureLayer",
], function (esriConfig, Map, MapView, FeatureLayer) {

   // This API Key should be kept private. Please Insert your own API Key here.
   esriConfig.apiKey = API_KEY;

   // Create a new map using the Newspaper template/theme.
   const map = new Map({
       basemap: "arcgis-newspaper",
   });

   // Create a new MapView that will automatically display the map created above
   // at the coordinates provided. Coordinates were included with the map URL.
   const view = new MapView({
       container: "viewDiv",
       map: map,
       extent: {
           xmin: -13638301.6348,
           ymin: 4538270.3041,
           xmax: -13620715.1545,
           ymax: 4552841.6267,
           spatialReference: 102100
       }
   });

   // This is a the template layer that will be used to display the schools and their info.
   const schoolsTemplate = {
       title: "{Campus_Name}",
       content: "<b>Campus Name:</b>{Campus_Name} <br/> <b>Grade Range:</b> {Grade_range} <br/> <b>Category:</b> {Category} <br/> <b>Police Districts:</b> {Police_Districts}</b>",
   };

   // This is the layer that will be used to display the schools.
   // Notice the outfields that are used in the template.
   const sanFranciscoSchools = new FeatureLayer({
       url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/San_Francisco_Schools/FeatureServer/0",
       outFields: ["Campus_Name", "Grade_range", "Category", "Police_Districts"],
       popupTemplate: schoolsTemplate
   });

   // Add the layer to the map.
   map.add(sanFranciscoSchools, 0);

   // This is the template layer that will be used to display the SF Neighborhoods and their info.
   const popupTemplate = {
       title: "Neighborhood",
       content: "<b>Neighborhood:</b> {nbrhood}<br><b>Total Population:</b> {TOTPOP_CY}",
   };

   // This is the layer that will be used to display the SF Neighborhoods.
   // Notice the outfields that are used in the template.
   const sanFranciscoNeighborhoods = new FeatureLayer({
       url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/SF_Neighborhoods_with_population/FeatureServer/0",
       outFields: ["nbrhood", "TOTPOP_CY"],
       popupTemplate: popupTemplate,
   });

   // Add the layer to the map.
   map.add(sanFranciscoNeighborhoods, 0);

});
