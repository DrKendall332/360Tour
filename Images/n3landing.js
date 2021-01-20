var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
	id: 'Pupil Entrance',
	y: 1414,
    x: 1309,
    image: 'assets/downleft_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go down to Pupil Entrance',
    scale: [1,2],
	data: {type: '3Droom', room: 'n2_3_stair', id:'N3 Landing', x:0, y:0}
  },
  {
	id: 'Maths Corridor',
	y: 1449,
    x: 2825,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go up Maths Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'maths1', id:'N3 Landing', x:0, y:0}
  },
  {
    id: 'SFL',
    y: 1375,
    x: 56,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to Support For Learning',
    scale: [1,2],
	data: {type: '3Droom', room: 'sfl', id:'N3 Landing', x:0, y:0}
  },
  {
    id: 'ASNVid',
    y: 1311,
    x: 120,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'ASN Introduction',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/eelRkQIJ-Sw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },
  {
    id: 'ASN',
    y: 1461,
    x: 2589,
    image: 'assets/left_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to ASN',
    scale: [1,2],
	data: {type: '3Droom', room: 'asn', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N3.42',
    y: 1518,
    x: 4194,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.42',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_42', id:'Doorway', x:0, y:0}
  },
  {
    id: 'N3.43',
    y: 1509,
    x: 3356,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'Go to N3.43',
    scale: [1,2],
	data: {type: '3Droom', room: 'n3_43', id:'Doorway', x:0, y:0}
  },
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
