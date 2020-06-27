var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1527,
    x: 3588,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To N3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3landing', id:'ASN', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}