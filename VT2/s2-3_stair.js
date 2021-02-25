var data = {
	width: 5376,
	height: 2688,
	tilt:-0.08,
	roll:0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's3_stair',
	    y: 1353,
	    x: 1381,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 3 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_stair', id:'s2-3_stair', x:0, y:0}
  	},
	       {
	    id: 'reception_s6',
	    y: 1601,
	    x: 5339,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 2 and Reception',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'reception_s6', id:'s2-3_stair', x:0, y:0}
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