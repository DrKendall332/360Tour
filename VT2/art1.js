var data = {
	width: 5376,
	height: 2688,
	tilt:0.05,
	pan:0,
	roll:0
  };
  
var markers = {
	default:[{
	    id: 'HEC',
	    y: 1297,
	    x: 5307,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to Home Economics Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'HEC', id:'art1', x:0, y:0}
  	},
	       {
	    id: 'music2',
	    y: 1378,
	    x: 2649,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Move to Music Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'music2', id:'art1', x:0, y:0}
  	},
       {
	    id: 'n1_11',
	    y: 1339,
	    x: 954,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N1.11',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_11', id:'art1', x:0, y:0}
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