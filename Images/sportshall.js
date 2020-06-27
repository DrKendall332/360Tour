var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1348,
    x: 2938,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To PE Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'pe3', id:'Sports Hall', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}