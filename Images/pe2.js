var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Drama',
    y: 1351,
    x: 3997,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Drama Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'pe', id:'PE', x:0, y:0}
   },
   {
    id: 'PE',
    y: 1351,
    x: 1273,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to PE',
    scale: [1,2],
	data: {type: '3Droom', room: 'pe3', id:'PE', x:0, y:0}
   },
   {
    id: 'M',
    y: 1363,
    x: 1596,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Male Changing',
	content: 'Male Changing',
    scale: [1,2],
	data: {type: 'Info'}
   },
   {
    id: 'F',
    y: 1333,
    x: 3696,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Female Changing',
	content: 'Female Changing',
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