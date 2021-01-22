var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'S3 Landing',
    y: 999,
    x: 5017,
    image: 'assets/left_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up to S3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 's3landing', id:'Stairs to Main Entrance', x:0, y:0}
  },
  {
    id: 'Reception',
    y: 1712,
    x: 2601,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down to Reception / Library',
    scale: [1,2],
	data: {type: '3Droom', room: 's2_reception', x:2180, y:1357}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
