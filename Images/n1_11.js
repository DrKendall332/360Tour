var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1443,
    x: 1315,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To Arts Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'art2', id:'N1.11', x:0, y:0}
  },
 /* {
    id: 'ArtsVid',
    y: 1390,
    x: 2625,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'Art Introduction',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/QFODbKQzQFU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },*/
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
