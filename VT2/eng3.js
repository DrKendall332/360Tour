var data = {
	width: 5376,
	height: 2688,
	tilt:-0.11,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'eng2',
	    y: 1427,
	    x: 2694,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng2', id:'eng3', x:0, y:0}
  	},
	       {
	    id: 'eng4',
	    y: 1263,
	    x: 5362,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To English and Social Studies',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng4', id:'eng3', x:0, y:0}
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