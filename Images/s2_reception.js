var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'S3 Stairs',
    y: 1139,
    x: 874,
    image: 'assets/upleft_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up to S3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 's2_3_stair', id:'Reception', x:0, y:0}
  },
  {
    id: 'SLT Corridor',
    y: 1396,
    x: 5268,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to SLT Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'slt', id:'Reception', x:0, y:0}
  },
  {
    id: 'Guidance Corridor',
    y: 1396,
    x: 5158,
    image: 'assets/left_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Guidance Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'guidance', id:'Reception', x:0, y:0}
  },
  {
    id: 'Main Entrance',
    y: 1363,
    x: 1867,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Main Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'entrance', id:'Reception', x:0, y:0}
  },
  {
    id: 'S1 2 Stair',
    y: 1411,
    x: 1518,
    image: 'assets/downleft_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down to Canteen',
    scale: [1,2],
	data: {type: '3Droom', room: 's1_2_stair', id:'Reception', x:0, y:0}
  },
  {
    id: 'Reception',
    y: 1357,
    x: 2180,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Reception / Office',
	content: 'Reception / Office',
    scale: [1,2],
	data: {type: 'Info'}
  },
  {
    id: 'Library',
    y: 1575,
    x: 4066,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Library',
	content: 'Library',
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