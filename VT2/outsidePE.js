var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = {
	default:[{
	    id: 'outside2',
	    y: 1330,
	    x: 1399,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Rear of North Block ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'outside2', id:'outsidePE', x:0, y:0}
  	},
	       {
	    id: 'pe4',
	    y: 1293,
	    x: 196,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.E. Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pe4', id:'outsidePE', x:0, y:0}
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