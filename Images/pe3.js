var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'PE',
    y: 1309,
    x: 2225,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to PE Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'pe2', id:'PE', x:0, y:0}
   },
   {
    id: 'Sports Hall',
    y: 1351,
    x: 3943,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Sports Hall',
    scale: [1,2],
	data: {type: '3Droom', room: 'sportshall', id:'Doorway', x:0, y:0}
   },
   {
    id: 'Gym',
    y: 1345,
    x: 1181,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Gymnasium',
	content: 'Gymnasium',
    scale: [1,2],
	data: {type: 'Info'}
   },
   {
    id: 'Fitness',
    y: 1261,
    x: 641,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Fitness Suite',
	content: 'Fitness Suite',
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