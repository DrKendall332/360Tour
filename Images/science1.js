var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'S3.32',
    y: 1378,
    x: 1703,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.32',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_32', id:'Doorway', x:0, y:0}
  },
{
    id: 'S3.33',
    y: 1393,
    x: 3663,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.33',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_33', id:'Doorway', x:0, y:0}
  },
  {
    id: 'Technician Room',
    y: 1366,
    x: 4749,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Technician Room',
    scale: [1,2],
	data: {type: '3Droom', room: 'technician', id:'Doorway', x:0, y:0}
  },
  {
    id: 'S3 Landing',
    y: 1342,
    x: 71,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 's3landing', id:'Science Corridor (Start)', x:0, y:0}
  },
  {
    id: 'Science Corridor (Middle)',
    y: 1365,
    x: 2676,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Science Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'science2', id:'Science Corridor (Start)', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}