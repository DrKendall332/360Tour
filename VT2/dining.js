var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	pan:0,
	roll:-0.07
  };
  
var markers = {
	default:[{
	    id: 'canteen',
	    y: 1238,
	    x: 981,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to Canteen ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'canteen', id:'dining', x:0, y:0}
  	},
	       {
	    id: 'coffeeBar',
	    y: 1288,
	    x: 4841,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to Coffee Bar',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'coffeeBar', id:'dining', x:0, y:0}
  	},
	{
	    id: 's1_stair',
	    y: 1338,
	    x: 2100,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to South Block Level 1 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1-stair', id:'dining', x:0, y:0}
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
	if (tourID ==="default") {
		markersPlugin.setMarkers(markers['default']);
	}
	else if (exclude[tourID]) {
	  markersPlugin.setMarkers(markers[tourID]);
	}
	else {
	  markersPlugin.setMarkers(markers[tourID].concat(markers.default));
	}
}