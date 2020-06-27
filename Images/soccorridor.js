var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'English Corridor',
    y: 1354,
    x: 2696,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to English Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'engcorridor', id:'Social Corridor', x:0, y:0}
  },
  {
    id: 'N2.21',
    y: 1285,
    x: 2058,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N2.21',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_21', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N2.22',
    y: 1330,
    x: 3421,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N2.22',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_22', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N2.23',
    y: 1279,
    x: 856,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N2.23',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_23', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N2.24',
    y: 1360,
    x: 4504,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N2.24',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_24', id:'Doorway', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}