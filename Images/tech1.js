var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Tech',
    y: 1363,
    x: 2628,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down Tech Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'tech2', id:'Tech1', x:0, y:0}
  },
  {
    id: 'Canteen',
    y: 1342,
    x: 23,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Canteen',
    scale: [1,2],
	data: {type: '3Droom', room: 'canteen', id:'Tech', x:0, y:0}
  },
  {
    id: 'S1.01',
    y: 1384,
    x: 1106,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'S1.01',
    scale: [1,2],
	data: {type: '3Droom', room: 's1_01', id:'Doorway', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}