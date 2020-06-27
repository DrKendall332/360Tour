var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Reception',
    y: 1360,
    x: 2500,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Reception / Library',
    scale: [1,2],
	data: {type: '3Droom', room: 's2_reception', id:'SLT Corridor', x:0, y:0}
  },
  {
    id: 'Staffroom1',
    y: 1378,
    x: 3281,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Staffroom',
    scale: [1,2],
	data: {type: '3Droom', room: 'staffroom', id:'Doorway1', x:0, y:0}
  },
  {
    id: 'Staffroom2',
    y: 1339,
    x: 5098,
    image: 'assets/left_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Staffroom',
    scale: [1,2],
	data: {type: '3Droom', room: 'staffroom', id:'Doorway2', x:0, y:0}
  },
  {
    id: 'MrCampbell',
    y: 1339,
    x: 2370,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Mr Campbell\'s Office',
	content: 'Mr Campbell\'s Office',
    scale: [1,2],
	data: {type: 'Info'}
  },
  {
    id: 'MrMiddleton',
    y: 1208,
    x: 1414,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Mr Middleton\'s Office',
	content: 'Mr Middleton\'s Office',
    scale: [1,2],
	data: {type: 'Info'}
  },
  {
    id: 'MrsLogue',
    y: 1211,
    x: 859,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Mrs Logue\'s Office',
	content: 'Mrs Logue\'s Office',
    scale: [1,2],
	data: {type: 'Info'}
  },
  {
    id: 'MrChristie',
    y: 1318,
    x: 5349,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Mr Christie\'s Office',
	content: 'Mr Christie\'s Office',
    scale: [1,2],
	data: {type: 'Info'}
  },];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}