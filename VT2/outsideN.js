var data = {
	width: 5376,
	height: 2688,
	tilt:-0.12,
	roll:-0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'outside2',
	    y: 1320,
	    x: 1467,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Entrance ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'outside2', id:'outsideN', x:0, y:0}
  	},
	       {
	    id: 'outsideS',
	    y: 1411,
	    x: 3759,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Rear',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'outsideS', id:'outsideN', x:0, y:0}
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