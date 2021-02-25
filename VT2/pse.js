var data = {
	width: 5376,
	height: 2688,
	tilt:-0.1,
	roll:-0.05,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's3_26',
	    y: 1285,
	    x: 4709,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.36 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_26', id:'pse', x:0, y:0}
  	},
	       {
	    id: 's3_27',
	    y: 1308,
	    x: 1965,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.27',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_27', id:'pse', x:0, y:0}
  	},
       {
	    id: 'sciT',
	    y: 1417,
	    x: 2742,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Science Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sciT', id:'pse', x:0, y:0}
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