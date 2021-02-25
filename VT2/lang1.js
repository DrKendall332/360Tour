var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'sflC',
	    y: 1312,
	    x: 5278,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Support For Learning ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sflC', id:'lang1', x:0, y:0}
  	},
	       {
	    id: 'ASNkitchen',
	    y: 1371,
	    x: 2114,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To ASN Kitchen',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'ASNkitchen', id:'lang1', x:0, y:0}
  	},
       {
	    id: 'n3_stair',
	    y: 1338,
	    x: 647,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 3 Stair',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_stair', id:'lang1', x:0, y:0}
  	},
       {
	    id: 'n3_42',
	    y: 1348,
	    x: 4701,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.42',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_42', id:'lang1', x:0, y:0}
  	},
       {
	    id: 'n3_43',
	    y: 1430,
	    x: 3507,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.43',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_43', id:'lang1', x:0, y:0}
  	},
       {
	    id: 'lang2',
	    y: 1387,
	    x: 2537,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Languages and Mathematics Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'lang2', id:'lang1', x:0, y:0}
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