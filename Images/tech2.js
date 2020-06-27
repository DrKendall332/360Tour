var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Tech1',
    y: 1434,
    x: 5331,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Tech Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'tech1', id:'Tech', x:0, y:0}
  },
  {
    id: 'Tech3',
    y: 1426,
    x: 2327,
    image: 'assets/left_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down Tech Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'tech3', id:'Tech2', x:0, y:0}
  },
  {
    id: 'S1.02',
    y: 1563,
    x: 483,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'S1.02',
    scale: [1,2],
	data: {type: '3Droom', room: 's1_02', id:'Doorway', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}