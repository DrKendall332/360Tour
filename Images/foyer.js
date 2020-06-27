var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [
  {
	id: 'Main Entrance',
	y: 1333,
    x: 4173,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Main Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'entrance', id:'Foyer', x:0, y:0}
  },
  {
	id: 'Outside',
	y: 1312,
    x: 235,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go outside',
    scale: [1,2],
	data: {type: 'url', url:'index.html'}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}