var data = {
	width: 5376,
	height: 2688,
	tilt:-0.12,
	roll:0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'musicPractR',
	    y: 1441,
	    x: 2437,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Music Practice Room ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'musicPractR', id:'music2', x:0, y:0}
  	},
	       {
	    id: 'musicPractL',
	    y: 1276,
	    x: 263,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Music Practice Room',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'musicPractL', id:'music2', x:0, y:0}
  	},
       {
	    id: 'n1_09',
	    y: 1388,
	    x: 1296,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N1.09',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_09', id:'music2', x:0, y:0}
  	},
       {
	    id: 'art1',
	    y: 1246,
	    x: 5291,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Art and Home Economics Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'art1', id:'music2', x:0, y:0}
  	},
       {
	    id: 'n1_stair',
	    y: 1442,
	    x: 2597,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 1',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_stair', id:'music2', x:0, y:0}
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