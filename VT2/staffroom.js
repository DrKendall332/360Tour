var data = {
	width: 5376,
	height: 2688,
	tilt:-0.04,
	roll:0.07,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'SLT2',
	    y: 1381,
	    x: 1094,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to SLT Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'SLT2', id:'staffroom', x:0, y:0}
  	},
	       {
	    id: 'SLT2',
	    y: 1368,
	    x: 1101,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To S.L.T. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'SLT2', id:'staffroom', x:0, y:0}
  	},
       {
	    id: 'SLT1',
	    y: 1410,
	    x: 2204,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To S.L.T. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'SLT1', id:'staffroom', x:0, y:0}
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