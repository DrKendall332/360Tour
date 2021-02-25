var data = {
	width: 5376,
	height: 2688,
	tilt:-0.05,
	roll:0.04,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'SLT1',
	    y: 1383,
	    x: 2684,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To S.L.T. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'SLT1', id:'s6social1', x:0, y:0}
  	},
	       {
	    id: 's6social',
	    y: 1275,
	    x: 4066,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To S6 Social Area',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's6social', id:'s6social1', x:0, y:0}
  	},
       {
	    id: 'guidanceC',
	    y: 1345,
	    x: 2204,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Guidance Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'guidanceC', id:'s6social1', x:0, y:0}
  	},
       {
	    id: 'reception_s6',
	    y: 1274,
	    x: 5271,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Library and Reception',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'reception_s6', id:'s6social1', x:0, y:0}
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