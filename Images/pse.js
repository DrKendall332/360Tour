var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'S3.26',
    y: 1324,
    x: 5000,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.26',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_26', id:'Doorway', x:0, y:0}
  },
{
    id: 'S3.27',
    y: 1408,
    x: 1267,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.27',
    scale: [1,2],
	data: {type: '3Droom', room: 's3_27', id:'Doorway', x:0, y:0}
  },
  {
    id: 'Science Corridor (Middle)',
    y: 1384,
    x: 2667,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down Science Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'science2', id:'PSE Corridor', x:0, y:0}
  },
  {
    id: 'Toilets',
    y: 1384,
    x: 2430,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Toilets',
	content: 'Toilets',
    scale: [1,2],
	data: {type: 'Info'}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
