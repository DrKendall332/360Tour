var data = {
	width: 5376,
	height: 2688,
	tilt:-0.03,
	roll:0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'n2_stair',
	    y: 2688,
	    x: 4278,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Enter North Block Level 2 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_stair', id:'pupilEnt', x:0, y:0}
  	},
	       {
	    id: 'n2_stair',
	    y: 1289,
	    x: 4445,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_stair', id:'pupilEnt', x:0, y:0}
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