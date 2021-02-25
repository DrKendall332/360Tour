var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'art1',
	    y: 1253,
	    x: 4421,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to Art Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'art1', id:'n1_11', x:0, y:0}
  	},
	       {
	    id: 'n1_12',
	    y: 1257,
	    x: 113,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N1.12',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_12', id:'n1_11', x:0, y:0}
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