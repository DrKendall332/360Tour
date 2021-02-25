var data = {
	width: 5376,
	height: 2688,
	tilt:0,
	roll:0.05,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's6social1',
	    y: 1338,
	    x: 320,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 2 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's6social1', id:'reception_s6', x:0, y:0}
  	},
	       {
	    id: 'libraryentry',
	    y: 1252,
	    x: 5077,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Library',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'libraryentry', id:'reception_s6', x:0, y:0}
  	},
       {
	    id: 'reception',
	    y: 1397,
	    x: 2273,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Reception',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'reception', id:'reception_s6', x:0, y:0}
  	},
       {
	    id: 's2-3_stair',
	    y: 1091,
	    x: 1088,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 3 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2-3_stair', id:'reception_s6', x:0, y:0}
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