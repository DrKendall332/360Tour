var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'n3b_stair',
	    y: 1384,
	    x: 2392,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 3 Back Stair ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3b_stair', id:'maths2', x:0, y:0}
  	},
	       {
	    id: 'maths1',
	    y: 1308,
	    x: 29,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Mathematics',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'maths1', id:'maths2', x:0, y:0}
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