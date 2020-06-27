var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Reception',
    y: 1082,
    x: 2762,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up to Reception / Library',
    scale: [1,2],
	data: {type: '3Droom', room: 's2_reception', id:'S1 2 Stair', x:0, y:0}
  },
  {
    id: 'Canteen',
    y: 1742,
    x: 4,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down to Canteen',
    scale: [1,2],
	data: {type: '3Droom', room: 'canteen', id:'S1 2 Stair', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}