var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1446,
    x: 877,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Maths Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'maths2', id:'N3.51', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}