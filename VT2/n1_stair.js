var data = {
	width: 5376,
	height: 2688,
	tilt:0,
	roll:-0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'coffeeBar',
	    y: 1341,
	    x: 877,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Coffee Bar ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'coffeeBar', id:'n1_stair', x:0, y:0}
  	},
	       {
	    id: 'theatre',
	    y: 1365,
	    x: 1267,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Theatre',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'theatre', id:'n1_stair', x:0, y:0}
  	},
       {
	    id: 'n1C',
	    y: 1310,
	    x: 4967,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 1',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1C', id:'n1_stair', x:0, y:0}
  	},
       {
	    id: 'music2',
	    y: 1347,
	    x: 3316,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Music',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'music2', id:'n1_stair', x:0, y:0}
  	},
       {
	    id: 'music1',
	    y: 1346,
	    x: 3662,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Music and P.E. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'music1', id:'n1_stair', x:0, y:0}
  	},
	{
	    id: 'n2_stair',
	    y: 993,
	    x: 5334,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_stair', id:'n1_stair', x:0, y:0}
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