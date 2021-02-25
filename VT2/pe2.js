var data = {
	width: 5376,
	height: 2688,
	tilt:-0.11,
	roll:-0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'pe3',
	    y: 1283,
	    x: 5315,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe3', id:'pe2', x:0, y:0}
  	},
	       {
	    id: 'pe1',
	    y: 1459,
	    x: 2737,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe1', id:'pe2', x:0, y:0}
  	},
       {
	    id: 'changeRoomL2',
	    y: 1253,
	    x: 858,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Male Changing Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'changeRoomL2', id:'pe2', x:0, y:0}
  	},
       {
	    id: 'changeRoomR2',
	    y: 1381,
	    x: 1918,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Female Changing Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'changeRoomR2', id:'pe2', x:0, y:0}
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
