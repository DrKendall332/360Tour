var data = {
	width: 5376,
	height: 2688,
	tilt:-0.04,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 's1_02',
	    y: 1326,
	    x: 1313,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'S1.02 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's1_02', id:'tech2', x:0, y:0}
  	},
	       {
	    id: 'tech3',
	    y: 1367,
	    x: 2636,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Technical Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'tech3', id:'tech2', x:0, y:0}
  	},
       {
	    id: 'tech1',
	    y: 1276,
	    x: 24,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Technical Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'tech1', id:'tech2', x:0, y:0}
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