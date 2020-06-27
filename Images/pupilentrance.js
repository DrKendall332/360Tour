var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Main Entrance',
    y: 1345,
    x: 1199,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Main Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'entrance', id:'Pupil Entrance', x:0, y:0}
  },
  {
    id: 'N3 Landing',
    y: 1184,
    x: 3392,
    image: 'assets/upleft_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up to N3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_3_stair', id:'Pupil Entrance', x:0, y:0}
  },
  {
    id: 'N1 Landing',
    y: 1440,
    x: 1992,
    image: 'assets/downright_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down to N1 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1landing', id:'Pupil Entrance', x:0, y:0}
  },
  {
    id: 'English',
    y: 1369,
    x: 2878,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to English',
    scale: [1,2],
	data: {type: '3Droom', room: 'english', id:'Pupil Entrance', x:0, y:0}
  },
  {
    id: 'Pupil Entrance',
    y: 1306,
    x: 4313,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Pupil Entrance',
	content: 'Pupil Entrance',
    scale: [1,2],
	data: {type: 'Info'}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}