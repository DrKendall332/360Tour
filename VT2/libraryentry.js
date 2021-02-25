var data = {
	width: 5376,
	height: 2688,
	tilt:-0.1,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'reception_s6',
	    y: 1250,
	    x: 5194,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to South Block Level 2 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'reception_s6', id:'libraryentry', x:0, y:0}
  	},
	       {
	    id: 'librarydesk',
	    y: 1319,
	    x: 815,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Librarian\'s Counter',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'librarydesk', id:'libraryentry', x:0, y:0}
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
