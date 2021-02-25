var data = {
	width: 5376,
	height: 2688,
	tilt:-0.03,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'n2-3b_stair',
	    y: 1660,
	    x: 2987,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Go down ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2-3b_stair', id:'n3b_stair', x:0, y:0}
  	},
	       {
	    id: 'maths2',
	    y: 1193,
	    x: 874,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Maths Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'maths2', id:'n3b_stair', x:0, y:0}
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