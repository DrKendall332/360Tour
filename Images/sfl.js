var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
	id: 'N3 Landing',
	y: 1342,
    x: 5325,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3landing', id:'SFL', x:0, y:0}
  },
  {
	id: 'N3.41',
	y: 1302,
    x: 686,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.41',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_41', id:'Doorway', x:0, y:0}
  },
  {
	id: 'N3.40',
	y: 1345,
    x: 3821,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.40',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_40', id:'Doorway', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}