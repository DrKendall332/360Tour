var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
	id: 'N3 Landing',
	y: 1366,
    x: 5337,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3 Landing',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3landing', id:'Maths Corridor', x:0, y:0}
  },
  {
	id: 'Maths Corridor',
	y: 1515,
    x: 2553,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Maths Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'maths2', id:'Maths Corridor', x:0, y:0}
  },
  {
    id: 'N3.46',
    y: 1458,
    x: 411,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.46',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_46', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N3.47',
    y: 1625,
    x: 4152,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.47',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_47', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N3.48',
    y: 1536,
    x: 1127,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.48',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_48', id:'Doorway', x:0, y:0}
  },
  {
    id: 'MathsVid',
    y: 1381,
    x: 2043,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'Maths Introduction',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/z65u7bC7wUk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
