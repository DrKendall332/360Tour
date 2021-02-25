var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:-0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'n1C',
	    y: 1312,
	    x: 199,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to North Block Level 1 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1C', id:'repro', x:0, y:0}
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