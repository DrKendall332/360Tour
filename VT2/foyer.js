var data = {
	width: 5376,
	height: 2688,
	tilt:-0.11,
	roll:-0.02,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's2_main',
	    y: 1309,
	    x: 4220,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Level 2 Main Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2_main', id:'foyer', x:0, y:0}
  	},
	
	],
   }

var exclude = {};

function getData(tourID) {
	if (tourID === "default") {
	  return {markers:markers.default, data:data};
	}
	else if (exclude[tourID]) {
  	  return {markers:markers[tourID], data:data};
	}
	else {
	  return {markers:markers[tourID].concat(markers.default), data:data};
	}
}

function runMarkerUpdate(tourID) {
	if (tourID === "default") {
		markersPlugin.setMarkers(markers.default);
	}
	else if (exclude[tourID]) {
	  markersPlugin.setMarkers(markers[tourID]);
	}
	else {
	  markersPlugin.setMarkers(markers[tourID].concat(markers.default));
	}
}