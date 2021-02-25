var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	pan:0,
	roll:-0.05
  };
  
var markers = {
	default:[{
	    id: 'dining',
	    y: 1388,
	    x: 5076,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to Seating Area ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'dining', id:'canteen', x:0, y:0}
  	},
       {
	    id: 's1_stair',
	    y: 1383,
	    x: 3957,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 1 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1_stair', id:'canteen', x:0, y:0}
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