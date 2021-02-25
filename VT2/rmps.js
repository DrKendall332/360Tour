var data = {
	width: 5376,
	height: 2688,
	tilt:-0.09,
	roll:0.01,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'lang2',
	    y: 1398,
	    x: 2689,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Languages and Support For Learning Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'lang2', id:'rmps', x:0, y:0}
  	},
	       {
	    id: 'maths1',
	    y: 1401,
	    x: 2692,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Languages Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'maths1', id:'rmps', x:0, y:0}
  	},
       {
	    id: 'n3_47',
	    y: 1366,
	    x: 663,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.47',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_47', id:'rmps', x:0, y:0}
  	},
       {
	    id: 'n3_46',
	    y: 1433,
	    x: 3546,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.46',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_46', id:'rmps', x:0, y:0}
  	},
       {
	    id: 'n3_48',
	    y: 1331,
	    x: 4674,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'N3.48',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_48', id:'rmps', x:0, y:0}
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