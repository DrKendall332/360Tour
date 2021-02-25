var data = {
	width: 5376,
	height: 2688,
	tilt:-0.03,
	roll:0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'music2',
	    y: 1261,
	    x: 3505,
	    image: 'assets/right_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to Music Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'music2', id:'n1_09', x:0, y:0}
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