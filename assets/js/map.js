var map = L.map('map', {
    center: [ -7.157371, -78.517592],
    zoom: 14,
    minZoom: 8,
    maxZoom: 20,
     });

L.control.scale({    // para la escala
   imperial: false
    }).addTo(map);

 
var basemapOSM = L.tileLayer ('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{		
    attribution: '&copy ; <ahref ="http://osm.org/copyright"> OpenStreetMap </a> contributor'
  });
basemapOSM.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] }); 
googleTerrain.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);


var cajamarca = L.tileLayer.wms("http://localhost:8080/geoserver/webcajamarca/wms?", {
    layers: "webcajamarca:cajamarca", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
cajamarca.addTo(map);

var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webcajamarca/wms?", {
    layers: "webcajamarca:bancos", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
bancos.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/webcajamarca/wms?", {
    layers: "webcajamarca:colegios",
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
colegios.addTo(map);

var estacionamientos = L.tileLayer.wms("http://localhost:8080/geoserver/webcajamarca/wms?", {
    layers: "webcajamarca:estacionamientos",
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
estacionamientos.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webcajamarca/wms?", {
    layers: "webcajamarca:farmacias", 
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
farmacias.addTo(map);

var hoteles = L.tileLayer.wms("http://localhost:8080/geoserver/webcajamarca/wms?", {
    layers: "webcajamarca:hoteles", //gisweb:hoteles_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
hoteles.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webcajamarca/wms?", {
    layers: "webcajamarca:mercados", //gisweb:mercados_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
mercados.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webcajamarca/wms?", {
    layers: "webcajamarca:restaurantes", //gisweb:colegios_arequipa
   format: 'image/png',
   transparent: true,
   version: '1.1.1',
    attribution: "SENCICO"
  });
restaurantes.addTo(map);

var baseMaps = {                       
  "OSM": basemapOSM,
   "Terrain": googleTerrain,
  "Hidrido": googleHybrid,
  "Satelite": googleSat,
  };
var overlayMaps = {                             
    "Límites de Cajamarca": cajamarca,
    "Bancos": bancos,
    "Colegios": colegios,
    "Estacionamientos": estacionamientos,
    "Farmacias": farmacias,
    "Hoteles": hoteles,
    "Mercados": mercados,
    "Restaurantes": restaurantes,
  };

L.control.layers(baseMaps, overlayMaps,{
  position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
  collapsed: false // true
  }).addTo(map);
