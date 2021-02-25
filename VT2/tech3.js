var data = {
	width: 5376,
	height: 2688,
	tilt:-0.04,
	roll:0.05,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's1b_stair',
	    y: 1344,
	    x: 3612,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 1 Back Stair ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1b_stair', id:'tech3', x:0, y:0}
  	},
	       {
	    id: 's1_03',
	    y: 1377,
	    x: 2710,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S1.03',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1_03', id:'tech3', x:0, y:0}
  	},
       {
	    id: 'tech2',
	    y: 1264,
	    x: 223,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Technical Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'tech2', id:'tech3', x:0, y:0}
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