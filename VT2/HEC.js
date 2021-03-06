var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'HE',
	    y: 1356,
	    x: 4032,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Home Economics ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'HE', id:'HEC', x:0, y:0}
  	},
	       {
	    id: 'art1',
	    y: 1272,
	    x: 5303,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Art and Music Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'art1', id:'HEC', x:0, y:0}
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