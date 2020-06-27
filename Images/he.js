var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Art2',
    y: 1339,
    x: 116,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Arts Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'art2', id:'HE', x:0, y:0}
   },
   {
    id: 'N1.13',
    y: 1348,
    x: 4233,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'N1.13',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_13', id:'Doorway', x:0, y:0}
   },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}