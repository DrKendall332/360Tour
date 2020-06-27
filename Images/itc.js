var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'S3 Landing',
    y: 1366,
    x: 2655,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to S3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 's3landing', id:'I.T. Corridor', x:0, y:0}
  },
  {
    id: 'S3.36',
    y: 1363,
    x: 2264,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.36',
    scale: [1,2],
	data: {type: '3Droom', room: 'S3_36', id:'Doorway', x:0, y:0}
  },
  {
    id: 'S3.35',
    y: 1363,
    x: 3072,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.35',
    scale: [1,2],
	data: {type: '3Droom', room: 'S3_35', id:'Doorway', x:0, y:0}
  },
  {
    id: 'S3.38',
    y: 1288,
    x: 167,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.38',
    scale: [1,2],
	data: {type: '3Droom', room: 'S3_38', id:'Doorway', x:0, y:0}
  },
  {
    id: 'S3.39',
    y: 1306,
    x: 5143,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To S3.39',
    scale: [1,2],
	data: {type: '3Droom', room: 'S3_39', id:'Doorway', x:0, y:0}
  },

  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}