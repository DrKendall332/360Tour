var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'pse',
	    y: 1213,
	    x: 5280,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To P.S.E Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pse', id:'sciT', x:0, y:0}
  	},
	       {
	    id: 'sciTint',
	    y: 1342,
	    x: 1272,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Toilets',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sciTint', id:'sciT', x:0, y:0}
  	},
       {
	    id: 'sci2',
	    y: 1407,
	    x: 2629,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Science Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sci2', id:'sciT', x:0, y:0}
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