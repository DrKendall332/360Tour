var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Art',
    y: 1336,
    x: 11,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Arts Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'art', id:'Art2', x:0, y:0}
  },
  {
    id: 'N1.11',
    y: 1351,
    x: 4087,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'N1.11/12',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_11', id:'Doorway', x:0, y:0}
  },
  {
    id: 'HE',
    y: 1360,
    x: 2688,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to HE Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'he', id:'Art2', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}