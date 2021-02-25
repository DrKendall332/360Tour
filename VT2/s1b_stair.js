var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's1-2b_stair',
	    y: 1000,
	    x: 1366,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Go up ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1-2b_stair', id:'s1b_stair', x:0, y:0}
  	},
	       {
	    id: 'tech3',
	    y: 1388,
	    x: 2673,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Technical Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'tech3', id:'s1b_stair', x:0, y:0}
  	},
       {
	    id: 'outsideS',
	    y: 1333,
	    x: 209,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Outside of South Block',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'outsideS', id:'s1b_stair', x:0, y:0}
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
