var data = {
	width: 5376,
	height: 2688,
	tilt:-0.04,
	roll:-0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's1_01',
	    y: 1334,
	    x: 1319,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S1.01 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1_01', id:'tech1', x:0, y:0}
  	},
	       {
	    id: 's1_stair',
	    y: 1308,
	    x: 13,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 1 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1_stair', id:'tech1', x:0, y:0}
  	},
       {
	    id: 'tech2',
	    y: 1376,
	    x: 2645,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Technical Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'tech2', id:'tech1', x:0, y:0}
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
	if (tourID === "default" || typeof markers[tourID] === 'undefined' {
		markersPlugin.setMarkers(markers.default);
	}
	else if (exclude[tourID]) {
	  markersPlugin.setMarkers(markers[tourID]);
	}
	else {
	  markersPlugin.setMarkers(markers[tourID].concat(markers.default));
	}
}