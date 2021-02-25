var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:-0.02,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'mods1',
	    y: 1270,
	    x: 20,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Social Studies and English Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'mods1', id:'mods2', x:0, y:0}
  	},
	       {
	    id: 'n2b_stair',
	    y: 1394,
	    x: 2509,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2 Back Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2b_stair', id:'mods2', x:0, y:0}
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