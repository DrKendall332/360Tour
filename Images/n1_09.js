var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1258,
    x: 769,
    image: 'assets/right_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Arts Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'art', id:'N1.09', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}