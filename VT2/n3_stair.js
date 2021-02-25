var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'n2_stair',
	    y: 1709,
	    x: 3001,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_stair', id:'n3_stair', x:0, y:0}
  	},
	       {
	    id: 'lang1',
	    y: 1366,
	    x: 468,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Language and Maths Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'lang1', id:'n3_stair', x:0, y:0}
  	},
       {
	    id: 'sflC',
	    y: 1392,
	    x: 2571,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Support For Learning',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sflC', id:'lang1', x:0, y:0}
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