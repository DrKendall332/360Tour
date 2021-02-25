var data = {
	width: 5376,
	height: 2688,
	tilt:-0.11,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'n2_15',
	    y: 1330,
	    x: 4282,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.15 ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_15', id:'eng1', x:0, y:0}
  	},
	       {
	    id: 'n2_16',
	    y: 1392,
	    x: 3621,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N2.16',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_16', id:'eng1', x:0, y:0}
  	},
       {
	    id: 'n2_stair',
	    y: 1260,
	    x: 398,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 2 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_stair', id:'eng1', x:0, y:0}
  	},
       {
	    id: 'n2_social',
	    y: 1318,
	    x: 1605,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Level 1 Overlook',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_social', id:'eng1', x:0, y:0}
  	},
       {
	    id: 'eng2',
	    y: 1404,
	    x: 3039,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To English and Social Studies Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng2', id:'eng1', x:0, y:0}
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