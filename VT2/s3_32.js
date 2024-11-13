var data = {
	width: 5376,
	height: 2688,
	tilt:-0.06,
	roll:0.07,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'sci1',
	    y: 1405,
	    x: 2055,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Exit to Science Corridor ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'sci1', id:'s3_32', x:0, y:0}
  	},
	 {
	    id: 'MrsShanks',
	    y: 1355,
	    x: 2688,
	    image: 'assets/speech.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Introduction with Mrs Shanks',
	    scale: [1,2],
	    data: {type: '3Dvideo', src:'Video/S3_32b.mp4'}
	  },
	
	],
	transition:[{
	    id: 'HazardsActivity',
	    y: 1355,
	    x: 3960,
	    image: 'assets/think.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Hazards Activity',
	    scale: [1,2],
	    data: {type: 'gameFrame', html: '<iframe style="width:100%; height:100%" frameBorder="0" id="gameFrame" src="./Games/matchinggame.html">Your browser is not compatible!</iframe>'}
	  },],
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
