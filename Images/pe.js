var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'N1 Landing',
    y: 1312,
    x: 5328,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N1 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1landing', id:'PE', x:0, y:0}
   },
   {
    id: 'N1.07',
    y: 1333,
    x: 772,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'N1.07',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_07', id:'Doorway', x:0, y:0}
   },
   {
    id: 'N1.06',
    y: 1327,
    x: 4567,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'N1.06',
    scale: [1,2],
	data: {type: '3Droom', room: 'n1_06', id:'Doorway', x:0, y:0}
   },
   {
    id: 'PE',
    y: 1375,
    x: 2622,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to PE Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'pe2', id:'Drama', x:0, y:0}
   },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}