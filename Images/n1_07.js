var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1348,
    x: 3287,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Drama Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'pe', id:'N1.07', x:0, y:0}
  },
  {
    id: 'MusicVid',
    y: 1270,
    x: 465,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'Music Introduction',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MVB2NnBdfp0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
