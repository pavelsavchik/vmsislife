var resourcesToLoad = [{
		name : "defaultFont",
		path : 'fonts/labfont.js',
		loader : THREE.FontLoader
	}, {
		name : "studentModel",
		path : 'models/student.json',
		loader : THREE.ObjectLoader
	}, {
		name : "surfaceTexture",
		path : "textures/surface_3.jpg",
		loader : THREE.TextureLoader
	}
];

var resources = {};

function loadResources(doneCallback) {

	function loadResource(indexToLoad) {
		var resource = resourcesToLoad[indexToLoad];
		if (!resource) {
			doneCallback();
		} else {
			var loader = new resource.loader();
			loader.load(resource.path, function(data) {
				resources[resource.name] = data;
				loadResource(++indexToLoad);
			});
		}
	}

	loadResource(0);
}

