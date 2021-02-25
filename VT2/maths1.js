var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'rmps',
	    y: 1422,
	    x: 2630,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Mathematics and RMPS Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'rmps', id:'maths1', x:0, y:0}
  	},
	       {
	    id: 'maths2',
	    y: 1253,
	    x: 5329,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Mathematics Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'maths2', id:'maths1', x:0, y:0}
  	},
       {
	    id: 'n3_49',
	    y: 1367,
	    x: 1895,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.49',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_49', id:'maths1', x:0, y:0}
  	},
       {
	    id: 'n3_51',
	    y: 1344,
	    x: 742,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.51',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_51', id:'maths1', x:0, y:0}
  	},
       {
	    id: 'n3_50',
	    y: 1445,
	    x: 3361,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.50',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_50', id:'maths1', x:0, y:0}
  	},
       {
	    id: 'n3_52',
	    y: 1353,
	    x: 4574,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.52',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_52', id:'maths1', x:0, y:0}
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