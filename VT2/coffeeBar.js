var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	pan:0,
	roll:-0.01
  };
  
var markers = {
	default:[{
	    id: 'dining',
	    y: 1318,
	    x: 1085,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to Seating Area ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'dining', id:'coffeeBar', x:0, y:0}
  	},
	       {
	    id: 'theatre',
	    y: 1405,
	    x: 3054,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Theatre',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'theatre', id:'n1_stair', x:0, y:0}
  	},
       {
	    id: 'n1_stair',
	    y: 1408,
	    x: 3409,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to North Block Main Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_stair', id:'coffeeBar', x:0, y:0}
  	},
       {
	    id: 'n1C',
	    y: 1372,
	    x: 3708,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to North Block Level 1',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1C', id:'coffeeBar', x:0, y:0}
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