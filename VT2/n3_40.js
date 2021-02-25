var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.04,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'sflC',
	    y: 1414,
	    x: 1059,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to Support for Learning Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sflC', id:'n3_40', x:0, y:0}
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