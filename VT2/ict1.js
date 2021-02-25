var data = {
	width: 5376,
	height: 2688,
	tilt:-0.1,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's3_stair',
	    y: 1271,
	    x: 5233,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 3 Stairs ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_stair', id:'ict1', x:0, y:0}
  	},
	       {
	    id: 'ict2',
	    y: 1386,
	    x: 2548,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To I.C.T. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'ict2', id:'ict1', x:0, y:0}
  	},
       {
	    id: 's3_36',
	    y: 1297,
	    x: 3839,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.36',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_36', id:'ict1', x:0, y:0}
  	},
       {
	    id: 's3_35',
	    y: 1294,
	    x: 1210,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.35',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_35', id:'ict1', x:0, y:0}
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