var data = {
	width: 5376,
	height: 2688,
	tilt:-0.1,
	roll:0,
	pan:0
  };
  
var markers = {
	default:[{
	    id: 'med1',
	    y: 1251,
	    x: 203,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Medical Room ',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'med1', id:'n2_stair', x:0, y:0}
  	},
	       {
	    id: 'eng1',
	    y: 1353,
	    x: 4144,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To English and Social Studies Corridor',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'eng1', id:'n2_stair', x:0, y:0}
  	},
       {
	    id: 'n2_social',
	    y: 1374,
	    x: 3625,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Level 1 Overlook',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n2_social', id:'n2_stair', x:0, y:0}
  	},
       {
	    id: 'pupilEnt',
	    y: 1258,
	    x: 479,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Pupil Entrance',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'pupilEnt', id:'n2_stair', x:0, y:0}
  	},
       {
	    id: 's2_main',
	    y: 1407,
	    x: 2415,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To Reception and South Block',
	    scale: [1,2],
	    data: {type: '3Droom', room: 's2_main', id:'n2_stair', x:0, y:0}
  	},
	{
	    id: 'n1_stair',
	    y: 1407,
	    x: 3015,
	    image: 'assets/downright_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 1',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n1_stair', id:'n2_stair', x:0, y:0}
  	},
       {
	    id: 'n3_stair',
	    y: 1012,
	    x: 4097,
	    image: 'assets/forward_arrow.png',
	    width: 32,
	    height: 32,
	    tooltip: 'To North Block Level 3',
	    scale: [1,2],
	    data: {type: '3Droom', room: 'n3_stair', id:'n2_stair', x:0, y:0}
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