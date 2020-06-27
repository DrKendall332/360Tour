var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1443,
    x: 2121,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Social Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'soccorridor', id:'N2.24', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}