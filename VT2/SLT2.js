var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'SLT1',
	    y: 1235,
	    x: 103,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To S.L.T. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'SLT1', id:'SLT2', x:0, y:0}
  	},
	       {
	    id: 'staffroom',
	    y: 1409,
	    x: 1992,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Staffroom',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'staffroom', id:'SLT2', x:0, y:0}
  	},
       {
	    id: 's2b_stair',
	    y: 1357,
	    x: 2767,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Level 2 Back Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2b_stair', id:'SLT2', x:0, y:0}
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