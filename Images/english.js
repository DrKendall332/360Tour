var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Pupil Entrance',
    y: 1393,
    x: 155,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Main Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'pupilentrance', id:'English', x:0, y:0}
  },
  {
    id: 'English Corridor',
    y: 1470,
    x: 3162,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to English Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'engcorridor', id:'English', x:0, y:0}
  },
  {
    id: 'N2.16',
    y: 1480,
    x: 3881,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N2.16',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_16', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N2.15',
    y: 1446,
    x: 4470,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'N2.15',
	content: 'N2.15',
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