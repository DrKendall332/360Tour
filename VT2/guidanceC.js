var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.03,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's6social1',
	    y: 1243,
	    x: 5246,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 2 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's6social1', id:'guidanceC', x:0, y:0}
  	},
	       {
	    id: 'guidance2',
	    y: 1393,
	    x: 2792,
	    image: 'assets/right_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Guidance Office',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'guidance2', id:'guidanceC', x:0, y:0}
  	},
       {
	    id: 'guidance1',
	    y: 1388,
	    x: 2351,
	    image: 'assets/left_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Guidance Office',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'guidance1', id:'guidanceC', x:0, y:0}
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