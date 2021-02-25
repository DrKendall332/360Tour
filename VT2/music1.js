var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:-0.02,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'pe1',
	    y: 1431,
	    x: 2765,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe1', id:'music1', x:0, y:0}
  	},
	       {
	    id: 'n1_07',
	    y: 1352,
	    x: 1495,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N1.07',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_07', id:'music1', x:0, y:0}
  	},
       {
	    id: 'n1_06',
	    y: 1369,
	    x: 3995,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N1.06',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_06', id:'music1', x:0, y:0}
  	},
       {
	    id: 'n1_stair',
	    y: 1242,
	    x: 5369,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 1',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_stair', id:'music1', x:0, y:0}
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
