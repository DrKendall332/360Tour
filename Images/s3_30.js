var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1458,
    x: 617,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Science Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'science2', id:'S3.30', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}