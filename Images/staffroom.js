var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway1',
    y: 1440,
    x: 2100,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To SLT Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'slt', id:'Staffroom1', x:0, y:0}
  },
  {
    id: 'Doorway2',
    y: 1490,
    x: 1020,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To SLT Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'slt', id:'Staffroom2', x:0, y:0}
  },
];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}