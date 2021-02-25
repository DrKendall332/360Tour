var data = {
	width: 5376,
	height: 2688,
	tilt:-0.08,
	roll:0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's3b_stair',
	    y: 1051,
	    x: 2769,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Go up ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3b_stair', id:'s2-3b_stair', x:0, y:0}
  	},
	       {
	    id: 's2b_stair',
	    y: 1706,
	    x: 2652,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Go down',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2b_stair', id:'s2-3b_stair', x:0, y:0}
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