var data = {
	width: 5376,
	height: 2688,
	tilt:-0.12,
	roll:-0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'coffeeBar',
	    y: 1287,
	    x: 1349,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Coffee Bar ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'coffeeBar', id:'n1C', x:0, y:0}
  	},
	       {
	    id: 'n1_stair',
	    y: 1435,
	    x: 2430,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 1 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_stair', id:'n1C', x:0, y:0}
  	},
       {
	    id: 'repro',
	    y: 1350,
	    x: 75,
	    image: 'assets/left_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Reprographics',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'repro', id:'n1C', x:0, y:0}
  	},
       {
	    id: 'n1_confRoom',
	    y: 1383,
	    x: 4577,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Conference Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_confRoom', id:'n1C', x:0, y:0}
  	},
       {
	    id: 'n1_musicPract',
	    y: 1383,
	    x: 3788,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Music Practice Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_musicPract', id:'n1C', x:0, y:0}
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