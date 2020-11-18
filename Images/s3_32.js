var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = {
	default:[{
	    id: 'Doorway',
	    y: 1414,
	    x: 4782,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Science Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'science1', id:'S3.32', x:0, y:0}
  	},],
	transition:[{
	    id: 'MrsShanks',
	    y: 1355,
	    x: 0,
	    image: 'assets/speech.png',
	    width: 32,
	    height: 32,
	    tooltip: 'Introduction with Mrs Shanks',
	    scale: [1,2],
	    data: {type: '3Dvideo', src:'Video/S3_32b.mp4'}
	  },{
	    id: 'HazardsActivity',
	    y: 1355,
	    x: 1072,
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
	if (exclude[tourID]) {
  	  return {markers:markers[tourID], data:data};
	}
	else {
	  return {markers:markers[tourID].concat(markers.default), data:data};
	}
}

function runMarkerUpdate(tourID) {
	if (exclude[tourID]) {
	  markersPlugin.setMarkers(markers[tourID]);
	}
	else {
	  markersPlugin.setMarkers(markers[tourID].concat(markers.default));
	}
}
