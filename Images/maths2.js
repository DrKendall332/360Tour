var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [
  {
	id: 'Maths Corridor',
	y: 1333,
    x: 5376,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down Maths Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'maths1', id:'Maths Corridor', x:0, y:0}
  },
  {
    id: 'N3.49',
    y: 1309,
    x: 4645,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.49',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_49', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N3.50',
    y: 1327,
    x: 701,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.50',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_50', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N3.51',
    y: 1306,
    x: 3520,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.51',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_51', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N3.52',
    y: 1312,
    x: 1891,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.52',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_52', id:'Doorway', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}