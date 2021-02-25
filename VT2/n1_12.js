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
	    y: 1309,
	    x: 793,
	    image: 'assets/right_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to Art Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'art1', id:'n1_12', x:0, y:0}
  	},
	       {
	    id: 'n1_11',
	    y: 1236,
	    x: 82,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N1.11',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_11', id:'n1_12', x:0, y:0}
  	},

	],
   }

var exclude = {};

function getData(tourID) {
	if (tourID === "default" || typeof markers[tourID] === 'undefined') {
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
	if (tourID === "default" || typeof markers[tourID] === 'undefined') {
		markersPlugin.setMarkers(markers.default);
	}
	else if (exclude[tourID]) {
	  markersPlugin.setMarkers(markers[tourID]);
	}
	else {
	  markersPlugin.setMarkers(markers[tourID].concat(markers.default));
	}
}