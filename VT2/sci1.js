var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.04,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's3_32',
	    y: 1226,
	    x: 4563,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.32 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_32', id:'sci1', x:0, y:0}
  	},
	       {
	    id: 'technician',
	    y: 1377,
	    x: 1956,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Technician\'s Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'technician', id:'sci1', x:0, y:0}
  	},
       {
	    id: 's3_33',
	    y: 1311,
	    x: 850,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.33',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_33', id:'sci1', x:0, y:0}
  	},
       {
	    id: 'sci2',
	    y: 1323,
	    x: 7,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Science Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sci2', id:'sci1', x:0, y:0}
  	},
       {
	    id: 's3_stair',
	    y: 1338,
	    x: 2681,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 3 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_stair', id:'sci1', x:0, y:0}
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
