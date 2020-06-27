var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'English',
    y: 1354,
    x: 2646,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to English',
    scale: [1,2],
	data: {type: '3Droom', room: 'english', id:'English Corridor', x:0, y:0}
  },
  {
    id: 'Social Corridor',
    y: 1336,
    x: 5331,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Social Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'soccorridor', id:'English Corridor', x:0, y:0}
  },
  {
    id: 'N2.18',
    y: 1354,
    x: 4063,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N2.18',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_18', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N2.19',
    y: 1285,
    x: 340,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N2.19',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_19', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N2.20',
    y: 1345,
    x: 4889,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N2.20',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_20', id:'Doorway', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}