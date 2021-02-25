var data = {
	width: 5376,
	height: 2688,
	tilt:-0.08,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'SLT2',
	    y: 1379,
	    x: 2754,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To S.L.T. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'SLT2', id:'s2b_stair', x:0, y:0}
  	},
	       {
	    id: 's2-3b_stair',
	    y: 906,
	    x: 1417,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Go up',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2-3b_stair', id:'s2b_stair', x:0, y:0}
  	},
	  {
	    id: 's1-2b_stair',
	    y: 1856,
	    x: 1417,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Go down',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1-2b_stair', id:'s2b_stair', x:0, y:0}
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