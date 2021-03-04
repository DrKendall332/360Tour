var data = {
	width: 5376,
	height: 2688,
	tilt:-0.07,
	roll:0.04,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'SLT2',
	    y: 1401,
	    x: 2679,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To S.L.T. Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'SLT2', id:'SLT1', x:0, y:0}
  	},
	       {
	    id: 'staffroom',
	    y: 1252,
	    x: 792,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Staffroom',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'staffroom', id:'SLT1', x:0, y:0}
  	},
	{
	    id: 'MrsLogue',
	    y: 1205,
	    x: 3538,
	    image: 'assets/inspect.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Mrs Logue\'s Office',
	    content: 'Mrs Logue\'s Office',
	    scale: [1,2],
	    data: {type: 'Info'}
  	},
        {	 
	    id: 'MrMiddleton',
	    y: 1118,
	    x: 4302,
	    image: 'assets/inspect.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Mr Middleton\'s Office',
	    content: 'Mr Middleton\'s Office',
	    scale: [1,2],
	    data: {type: 'Info'}
  	},
	{	 
	    id: 'MrCampbell',
	    y: 1250,
	    x: 5220,
	    image: 'assets/inspect.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Mr Campbell\'s Office',
	    content: 'Mr Campbell\'s Office',
	    scale: [1,2],
	    data: {type: 'Info'}
  	},
       {
	    id: 's6social1',
	    y: 1261,
	    x: 5347,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To South Block Level 2',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's6social1', id:'SLT1', x:0, y:0}
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
