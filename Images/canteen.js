var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'S1 2 Stair',
    y: 1178,
    x: 4925,
    image: 'assets/upright_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up to Reception / Library',
    scale: [1,2],
	data: {type: '3Droom', room: 's1_2_stair', id:'Canteen', x:0, y:0}
  },
  {
    id: 'Tech',
    y: 1360,
    x: 2619,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down Tech Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'tech1', id:'Canteen', x:0, y:0}
  },
  {
    id: 'Dining Area',
    y: 1306,
    x: 4671,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Dining Area',
    scale: [1,2],
	data: {type: '3Droom', room: 'dining', id:'Canteen', x:0, y:0}
  },
  {
    id: 'Canteen',
    y: 1294,
    x: 2,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Canteen',
    scale: [1,2],
	content: 'Canteen',
	data: {type: 'Info'}
  },
  {
    id: 'Toilets',
    y: 1318,
    x: 292,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Toilets',
	content: 'Toilets',
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