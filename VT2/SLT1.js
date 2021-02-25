var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.04,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'SLT2',
	    y: 1401,
	    x: 2679,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To S.L.T. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'SLT2', id:'SLT1', x:0, y:0}
  	},
	       {
	    id: 'staffroom',
	    y: 1252,
	    x: 792,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Staffroom',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'staffroom', id:'SLT1', x:0, y:0}
  	},
       {
	    id: 's6social1',
	    y: 1261,
	    x: 5347,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 2',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's6social1', id:'SLT1', x:0, y:0}
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