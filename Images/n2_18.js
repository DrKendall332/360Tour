var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'Doorway',
    y: 1449,
    x: 671,
    image: 'assets/forward_arrow.png',
    width: 32,
    height: 32,
    tooltip: 'To English Corridor',
    scale: [1,2],
	data: {type: '3Droom', room: 'engcorridor', id:'N2.18', x:0, y:0}
  },
 /* {
    id: 'EngVid',
    y: 1524,
    x: 4865,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'English Introduction',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/GHaAkzdsv60" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },
  {
    id: 'BookVid',
    y: 1813,
    x: 83,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    tooltip: 'Reading Introduction',
    scale: [1,2],
    data: {type: 'gameFrame', html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/2Oxh4uG2bRs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}
  },*/
  ];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}
