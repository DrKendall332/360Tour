var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.07,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'sciT',
	    y: 1339,
	    x: 20,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Science Corridor Toilets ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sciT', id:'sci2', x:0, y:0}
  	},
	       {
	    id: 's3_28',
	    y: 1208,
	    x: 4615,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.28',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_28', id:'sci2', x:0, y:0}
  	},
       {
	    id: 's3_30',
	    y: 1308,
	    x: 3427,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.30',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_30', id:'sci2', x:0, y:0}
  	},
       {
	    id: 's3_29',
	    y: 1324,
	    x: 807,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.29',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_29', id:'sci2', x:0, y:0}
  	},
       {
	    id: 's3_31',
	    y: 1341,
	    x: 1979,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S3.31',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's3_31', id:'sci2', x:0, y:0}
  	},
       {
	    id: 'sci1',
	    y: 1354,
	    x: 2703,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Science Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sci1', id:'sci2', x:0, y:0}
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