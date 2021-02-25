var data = {
	width: 5376,
	height: 2688,
	tilt:-0.12,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'outsidePE',
	    y: 1477,
	    x: 2341,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Entrance ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'outsidePE', id:'outside2', x:0, y:0}
  	},
	       {
	    id: 'outsideN',
	    y: 1345,
	    x: 4085,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Rear',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'outsideN', id:'outside2', x:0, y:0}
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