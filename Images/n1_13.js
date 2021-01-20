var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1449,
    x: 4809,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To HE Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'he', id:'N1.13', x:0, y:0}
  },
  {
    id: 'HEVid',
    y: 1411,
    x: 5003,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'Home Economics Introduction',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/I6a01cz3q_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
