var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = {
	default:[{
	    id: 'pe4',
	    y: 1352,
	    x: 5366,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe4', id:'pe3', x:0, y:0}
  	},
	       {
	    id: 'changeRoomL3',
	    y: 1268,
	    x: 937,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Male Changing Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'changeRoomL3', id:'pe3', x:0, y:0}
  	},
       {
	    id: 'changeRoomR3',
	    y: 1314,
	    x: 1977,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Female Changing Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'changeRoomR3', id:'pe3', x:0, y:0}
  	},
       {
	    id: 'pe2',
	    y: 1380,
	    x: 2812,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe2', id:'pe3', x:0, y:0}
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