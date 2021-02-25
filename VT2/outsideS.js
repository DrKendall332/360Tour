var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:-0.12,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'outsideN',
	    y: 1232,
	    x: 1352,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Rear ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'outsideN', id:'outsideS', x:0, y:0}
  	},
	       {
	    id: 's1b_stair',
	    y: 1438,
	    x: 3239,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 1 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1b_stair', id:'outsideS', x:0, y:0}
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