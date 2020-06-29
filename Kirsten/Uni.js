var data = {
	width: 5376,
	height: 2688,
  };
  
var markers = [{
    id: 'new-marker',
    y: 1288,
    x: 119,
    image: 'assets/inspect.png',
    width: 32,
    height: 32,
    content: 'Some guy with a camera',
    tooltip: 'Iain',
    scale: [1,2],
	data: {type: 'Info'}
  },
  {
	id: 'marker2',
    y: 1437,
    x: 2822,
    image: 'assets/speech.png',
    width: 32,
    height: 32,
    content: 'Dance, Kirsten, dance!',
    tooltip: 'Watch Kirsten dance!',
    scale: [1,2],
	data: {type: '3Dvideo', src: 'Kirsten/Uni.mp4', x:0, y:0}
  }];

function getData() {
  return {markers:markers, data:data};
}

function runMarkerUpdate() {
  markersPlugin.setMarkers(markers);
}