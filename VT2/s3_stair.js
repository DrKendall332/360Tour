var data = {
	width: 5376,
	height: 2688,
	tilt:-0.08,
	roll:0.07,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'sci1',
	    y: 1285,
	    x: 4077,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Science Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sci1', id:'s3_stair', x:0, y:0}
  	},
	       {
	    id: 'ict1',
	    y: 1417,
	    x: 1309,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To I.C.T. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'ict1', id:'s3_stair', x:0, y:0}
  	},
       {
	    id: 's2-3_stair',
	    y: 1407,
	    x: 2716,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 3 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2-3_stair', id:'s3_stair', x:0, y:0}
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