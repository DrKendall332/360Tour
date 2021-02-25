var data = {
	width: 5376,
	height: 2688,
	tilt:-0.11,
	roll:0.4,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'eng1',
	    y: 1446,
	    x: 2702,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng1', id:'eng2', x:0, y:0}
  	},
	       {
	    id: 'eng3',
	    y: 1244,
	    x: 5337,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To English and Social Studies',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng3', id:'eng2', x:0, y:0}
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