var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Tech2',
    y: 1258,
    x: 161,
    image: 'assets/right_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Tech Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'tech2', id:'Tech3', x:0, y:0}
  },
  {
    id: 'S1.03',
    y: 1348,
    x: 2723,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'S1.03',
    scale: [1,2],
	data: {type: '3Droom', room: 's1_03', id:'Doorway', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}