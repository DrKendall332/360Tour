var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0.04,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'n3_41',
	    y: 1354,
	    x: 805,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To N3.41 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_41', id:'sflC', x:0, y:0}
  	},
	       {
	    id: 'n3_40',
	    y: 1387,
	    x: 3706,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.40',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_40', id:'sflC', x:0, y:0}
  	},
       {
	    id: 'lang1',
	    y: 1329,
	    x: 5350,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 3',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'lang1', id:'sflC', x:0, y:0}
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