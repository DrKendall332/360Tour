var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'tech3',
	    y: 1366,
	    x: 1560,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to Tech Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'tech3', id:'s1_03', x:0, y:0}
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