var data = {
	width: 5376,
	height: 2688,
	tilt:-0.1,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'n2_stair',
	    y: 1342,
	    x: 563,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to North Block Level 2 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_stair', id:'med1', x:0, y:0}
  	},
	       {
	    id: 'med2',
	    y: 1415,
	    x: 3195,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Medical Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'med2', id:'med1', x:0, y:0}
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