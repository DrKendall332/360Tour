var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Dining Area',
    y: 1336,
    x: 5107,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Dining Area',
    scale: [1,2],
	data: {type: '3Droom', room: 'dining', id:'N1 Landing', x:0, y:0}
  },
  {
    id: 'Pupil Entrance',
    y: 1193,
    x: 4746,
    image: 'assets/upleft_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Pupil Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'pupilentrance', id:'N1 Landing', x:0, y:0}
  },
  {
    id: 'N1.05',
    y: 1366,
    x: 3463,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'N1.05',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_05', id:'Doorway', x:0, y:0}
  },
  {
    id: 'Art',
    y: 1348,
    x: 1423,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Arts Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'art', id:'N1 Landing', x:0, y:0}
  },
  {
    id: 'PE',
    y: 1354,
    x: 2121,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Drama Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'pe', id:'N1 Landing', x:0, y:0}
  },
  
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}