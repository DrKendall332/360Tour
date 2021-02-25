var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'fitSuite',
	    y: 1269,
	    x: 3132,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Fitness Suite ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'fitSuite', id:'pe4', x:0, y:0}
  	},
	       {
	    id: 'sportHall',
	    y: 1357,
	    x: 1220,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Sports Hall',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sportHall', id:'pe4', x:0, y:0}
  	},
       {
	    id: 'danceStudio',
	    y: 1348,
	    x: 3956,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Dance Studio',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'danceStudio', id:'pe4', x:0, y:0}
  	},
       {
	    id: 'pe3',
	    y: 1320,
	    x: 5266,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe3', id:'pe4', x:0, y:0}
  	},
       {
	    id: 'outsidePE',
	    y: 1335,
	    x: 3720,
	    image: 'assets/left_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Outdoor Pitches',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'outsidePE', id:'pe4', x:0, y:0}
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