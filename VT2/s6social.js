var data = {
	width: 5376,
	height: 2688,
	tilt:-0.06,
	roll:0.04,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's6social1',
	    y: 1264,
	    x: 1661,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to Science Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's6social1', id:'s6social', x:0, y:0}
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