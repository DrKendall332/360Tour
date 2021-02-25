var data = {
	width: 5376,
	height: 2688,
	tilt:-0.03,
	roll:-0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'pe2',
	    y: 1322,
	    x: 5248,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe2', id:'pe1', x:0, y:0}
  	},
	       {
	    id: 'music1',
	    y: 1379,
	    x: 2603,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Music and Drama',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'music1', id:'pe1', x:0, y:0}
  	},
       {
	    id: 'changeRoomL',
	    y: 1297,
	    x: 722,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Male Changing Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'changeRoomL', id:'pe1', x:0, y:0}
  	},
       {
	    id: 'changeRoomR',
	    y: 1325,
	    x: 1717,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Female Changing Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'changeRoomR', id:'pe1', x:0, y:0}
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