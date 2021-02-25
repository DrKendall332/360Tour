var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'ict1',
	    y: 1410,
	    x: 2720,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To I.C.T. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'ict1', id:'ict2', x:0, y:0}
  	},
	       {
	    id: 's3_38',
	    y: 1305,
	    x: 902,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.38',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_38', id:'ict2', x:0, y:0}
  	},
       {
	    id: 's3_39',
	    y: 1204,
	    x: 4503,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.39',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_39', id:'ict2', x:0, y:0}
  	},
       {
	    id: 'ict3',
	    y: 1284,
	    x: 56,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To I.C.T. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'ict3', id:'ict2', x:0, y:0}
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