var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Reception',
    y: 1280,
    x: 5300,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Reception / Library',
    scale: [1,2],
	data: {type: '3Droom', room: 's2_reception', id:'Guidance Corridor', x:0, y:0}
  },
  {
    id: 'Offices',
    y: 1250,
    x: 2321,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Guidance Offices',
	content: 'Guidance Offices',
    scale: [1,2],
	data: {type: 'Info'}
  },
  /*{
    id: 'GVid1',
    y: 1250,
    x: 2521,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'Mrs Stevenson',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/yFkSPfGYNQg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },
  {
    id: 'GVid2',
    y: 1250,
    x: 2821,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'Mrs Jamieson',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/XyQ6fsubBj4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },
  {
    id: 'GVid3',
    y: 1550,
    x: 2521,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'Mrs Dunn',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/6ZJnwUCdyJM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },*/
  {
    id: 'Offices2',
    y: 1250,
    x: 3021,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Guidance Offices',
	content: 'Guidance Offices',
    scale: [1,2],
	data: {type: 'Info'}
  },
  {
    id: 'SToilets',
    y: 1180,
    x: 4800,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    tooltip: 'Staff Toilets',
	content: 'Staff Toilets',
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
