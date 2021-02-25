var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'reception_s6',
	    y: 1262,
	    x: 88,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Library and S.L.T. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'reception_s6', id:'reception', x:0, y:0}
  	},
	       {
	    id: 's2_main',
	    y: 1366,
	    x: 2639,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Level 2 Main Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2_main', id:'reception', x:0, y:0}
  	},
	{
	    id: 's2-3_stair',
	    y: 1032,
	    x: 775,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 3',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2-3_stair', id:'reception_s6', x:0, y:0}
  	},
       {
	    id: 's1_stair',
	    y: 1528,
	    x: 1127,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 1',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1_stair', id:'reception', x:0, y:0}
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