// set up the playing surface surface
var surfaceWidth = fieldWidth * 1.1,
	surfaceHeight = fieldHeight

function createSurface() {

	var texture = new THREE.ImageUtils.loadTexture("textures/surface_3.jpg");
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(2, 2);

	var material = new THREE.MeshLambertMaterial({
		map : texture
	});

	var surface = new THREE.Mesh(

		new THREE.PlaneGeometry(
			surfaceWidth,
			surfaceHeight
		),
		material
	);

	scene.add(surface);
	surface.receiveShadow = true;

	var loader = new THREE.FontLoader();
    loader.load('fonts/labfont.js', function (font) {
		var textGeo = new THREE.TextGeometry("DEADLINE", {
	        font: font,
	        size: 53,
	        height: 1,
	        curveSegments: 12,
	    });

	    var textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
		var deadline = new THREE.Mesh(textGeo, textMaterial);
	        
	    deadline.position.set(0, surfaceWidth * 0.6, 0);

	    deadline.rotation.x = 180 * Math.PI / 180;
	    deadline.rotation.y = 180 * Math.PI / 180;
	    deadline.rotation.z = 90 * Math.PI / 180;

	    deadline.receiveShadow = true;
	    scene.add(deadline);
	});
}