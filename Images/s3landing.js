var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Science Corridor (Start)',
    y: 1348,
    x: 1429,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Science Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'science1', id:'S3 Landing', x:0, y:0}
  },
  {
    id: 'I.T. Corridor',
    y: 1351,
    x: 4075,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up I.T. Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'itc', id:'S3 Landing', x:0, y:0}
  },
  {
    id: 'Stairs to Main Entrance',
    y: 1345,
    x: 53,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down to Main Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 's2_3_stair', id:'S3 Landing', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}