var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'N1 Landing',
    y: 1336,
    x: 71,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N1 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1landing', id:'Art', x:0, y:0}
  },
  {
    id: 'N1.09',
    y: 1351,
    x: 4087,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'N1.09',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_09', id:'Doorway', x:0, y:0}
  },
   {
    id: 'Art2',
    y: 1348,
    x: 2747,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down Arts Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'art2', id:'Art', x:0, y:0}
   },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}