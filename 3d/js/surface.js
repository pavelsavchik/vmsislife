// set up the playing surface surface
var surfaceWidth = fieldWidth,
	surfaceHeight = fieldHeight,
	surfaceQuality = 10;

// create the surface's material
var surfaceMaterial = new THREE.MeshLambertMaterial(
		{
			color: 0x4BD121
		});

function createSurface() {
	var surface = new THREE.Mesh(

		new THREE.PlaneGeometry(
			surfaceWidth * 0.95,	// 95% of table width, since we want to show where the ball goes out-of-bounds
			surfaceHeight,
			surfaceQuality,
			surfaceQuality),

		surfaceMaterial);

	scene.add(surface);
	surface.receiveShadow = true;
}