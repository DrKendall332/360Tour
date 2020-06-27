var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [
  {
	id: 'Pupil Entrance',
	y: 1345,
    x: 4052,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Pupil Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'pupilentrance', id:'Main Entrance', x:0, y:0}
  },
  {
	id: 'Reception',
	y: 1324,
    x: 1411,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Reception / Library',
    scale: [1,2],
	data: {type: '3Droom', room: 's2_reception', id:'Main Entrance', x:0, y:0}
  },
  {
	id: 'Foyer',
	y: 1299,
    x: 153,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Foyer',
    scale: [1,2],
	data: {type: '3Droom', room: 'foyer', id:'Main Entrance', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}