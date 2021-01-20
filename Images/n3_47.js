var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1434,
    x: 501,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Maths Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'maths1', id:'N3.47', x:0, y:0}
  },
  {
    id: 'RMPSVid',
    y: 1496,
    x: 4833,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'RMPS Introduction',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/EY02qFRrV-k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },
	       
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
