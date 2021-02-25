var data = {
	width: 5376,
	height: 2688,
	tilt:-0.06,
	roll:0.02,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'eng3',
	    y: 1384,
	    x: 2627,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To English Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng3', id:'eng4', x:0, y:0}
  	},
	       {
	    id: 'mods1',
	    y: 1287,
	    x: 5314,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Social Studies',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'mods1', id:'eng4', x:0, y:0}
  	},
       {
	    id: 'n2_19',
	    y: 1308,
	    x: 696,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.19',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_19', id:'eng4', x:0, y:0}
  	},
       {
	    id: 'n2_20',
	    y: 1290,
	    x: 4548,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.20',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_20', id:'eng4', x:0, y:0}
  	},
       {
	    id: 'n2_18',
	    y: 1384,
	    x: 3336,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.18',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_18', id:'eng4', x:0, y:0}
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