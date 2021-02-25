var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'eng4',
	    y: 1256,
	    x: 45,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To English Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng4', id:'mods1', x:0, y:0}
  	},
	       {
	    id: 'mods2',
	    y: 1412,
	    x: 2724,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'mods2', id:'mods1', x:0, y:0}
  	},
       {
	    id: 'n2_21',
	    y: 1287,
	    x: 4638,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.21',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_21', id:'mods1', x:0, y:0}
  	},
       {
	    id: 'n2_22',
	    y: 1329,
	    x: 846,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.22',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_22', id:'mods1', x:0, y:0}
  	},
       {
	    id: 'n2_24',
	    y: 1471,
	    x: 1985,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.24',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_24', id:'mods1', x:0, y:0}
  	},
       {
	    id: 'n2_23',
	    y: 1448,
	    x: 3432,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.23',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_23', id:'mods1', x:0, y:0}
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