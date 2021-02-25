var data = {
	width: 5376,
	height: 2688,
	tilt:-0.1,
	pan:0,
	roll:-0.01
  };
  
var markers = {
	default:[{
	    id: 'pe1',
	    y: 1270,
	    x: 5078,
	    image: 'assets/right_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe1', id:'changeRoomR', x:0, y:0}
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