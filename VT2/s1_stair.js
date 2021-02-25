var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'canteen',
	    y: 1363,
	    x: 2903,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Canteen ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'canteen', id:'s1_stair', x:0, y:0}
  	},
	       {
	    id: 'tech1',
	    y: 1282,
	    x: 4741,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Technical Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'tech1', id:'s1_stair', x:0, y:0}
  	},
       {
	    id: 'reception',
	    y: 1099,
	    x: 2479,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 2',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'reception', id:'s1_stair', x:0, y:0}
  	},
	{
	    id: 'coffeeBar',
	    y: 1363,
	    x: 1907,
	    image: 'assets/left_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Coffee Bar ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'coffeeBar', id:'s1_stair', x:0, y:0}
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