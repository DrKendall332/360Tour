var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Canteen',
    y: 1366,
    x: 1625,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Canteen',
    scale: [1,2],
	data: {type: '3Droom', room: 'canteen', id:'Dining Area', x:0, y:0}
  },
  {
    id: 'Theatre',
    y: 1420,
    x: 3329,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Theatre',
    scale: [1,2],
	data: {type: '3Droom', room: 'theatre', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N1 Landing',
    y: 1375,
    x: 3585,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N1 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1landing', id:'Dining Area', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}