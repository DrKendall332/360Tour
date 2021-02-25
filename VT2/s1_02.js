var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:-0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'tech2',
	    y: 1311,
	    x: 5110,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to Tech Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'tech2', id:'s1_02', x:0, y:0}
  	},
	{
	    id: 's1_01',
	    y: 1327,
	    x: 2404,
	    image: 'assets/left_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S1.01',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1_01', id:'s1_02', x:0, y:0}
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