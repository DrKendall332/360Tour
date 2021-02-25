var data = {
	width: 5376,
	height: 2688,
	tilt:-0.1,
	roll:0.02,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'eng4',
	    y: 1396,
	    x: 3162,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to English Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng4', id:'n2_19', x:0, y:0}
  	},
	
	],
   }

var exclude = {};

function getData(tourID) {
	if (tourID === "default") {
	  return {markers:markers.default, data:data};
	}
	else if (exclude[tourID] || typeof markers[tourID] === 'undefined') {
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