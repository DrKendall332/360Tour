var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'S3.28',
    y: 1342,
    x: 4665,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.28',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_28', id:'Doorway', x:0, y:0}
  },
{
    id: 'S3.29',
    y: 1354,
    x: 626,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.29',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_29', id:'Doorway', x:0, y:0}
  },
  {
    id: 'S3.30',
    y: 1384,
    x: 3481,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.30',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_30', id:'Doorway', x:0, y:0}
  },
  {
    id: 'S3.31',
    y: 1366,
    x: 1700,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.31',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_31', id:'Doorway', x:0, y:0}
  },
  {
    id: 'Science Corridor (Start)',
    y: 1360,
    x: 2610,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down Science Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'science1', id:'Science Corridor (Middle)', x:0, y:0}
  },
  {
    id: 'PSE Corridor',
    y: 1330,
    x: 5300,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Science Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'pse', id:'Science Corridor (Middle)', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}