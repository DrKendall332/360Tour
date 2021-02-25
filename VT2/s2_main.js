var data = {
	width: 5376,
	height: 2688,
	tilt:-0.1,
	roll:-0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'reception',
	    y: 1304,
	    x: 1319,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Reception ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'reception', id:'s2_main', x:0, y:0}
  	},
	       {
	    id: 'foyer',
	    y: 1174,
	    x: 206,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Foyer',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'foyer', id:'s2_main', x:0, y:0}
  	},
       {
	    id: 'n2_stair',
	    y: 1374,
	    x: 4010,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_stair', id:'s2_main', x:0, y:0}
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