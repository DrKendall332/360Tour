var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
	id: 'N3 Landing',
	y: 990,
    x: 32,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up to N3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3landing', id:'Pupil Entrance', x:0, y:0}
  },
  {
    id: 'Pupil Entrance',
    y: 1658,
    x: 2753,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down to Pupil Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'pupilentrance', id:'N3 Landing', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}