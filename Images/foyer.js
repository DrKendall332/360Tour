var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [
  {
	id: 'Main Entrance',
	y: 1333,
    x: 4173,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Main Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'entrance', id:'Foyer', x:0, y:0}
  },
  {
	id: 'Outside',
	y: 1312,
    x: 235,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go outside',
    scale: [1,2],
	data: {type: 'url', url:'index.html'}
  },
  {
    id: 'GuidanceJump',
    y: 1443,
    x: 2380,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to Guidance!',
    scale: [1,2],
	data: {type: '3Droom', room: 'guidance', x:2671, y:1250}
  },
  {
    id: 'ScienceJump',
    y: 1370,
    x: 1900,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to Science!',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_32', x:0, y:1355}
  },
  {
    id: 'RMPSJump',
    y: 1370,
    x: 2300,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to RMPS!',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_47', x:4833, y:1496}
  },

  {
    id: 'ASNJump',
    y: 1370,
    x: 2220,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to Support for Learning!',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3landing', x:120, y:1311}
  },
  {
    id: 'MathsJump',
    y: 1370,
    x: 2380,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to Maths!',
    scale: [1,2],
	data: {type: '3Droom', room: 'maths1', x:2043, y:1381}
  },
  {
    id: 'EnglishJump',
    y: 1370,
    x: 2460,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to English!',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_18', x:4865, y:1524}
  },
  {
    id: 'HEJump',
    y: 1370,
    x: 2860,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to Home Economics!',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_13', x:5003, y:1411}
  },
  {
    id: 'ArtJump',
    y: 1370,
    x: 2620,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to Art!',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_11', x:2625, y:1390}
  },
  {
    id: 'PEJump',
    y: 1370,
    x: 2780,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to Physical Education!',
    scale: [1,2],
	data: {type: '3Droom', room: 'pe2', x:1363, y:1279}
  },
  {
    id: 'MusicJump',
    y: 1370,
    x: 2700,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Jump to Music!',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_07', x:465, y:1270}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
