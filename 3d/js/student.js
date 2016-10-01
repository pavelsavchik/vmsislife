var student;

var studentMaterial =
	new THREE.MeshLambertMaterial(
		{
			color: 0x1B32C0
		});

var studentWidth = 20,
	studentHeight = 20, 
	studentDepth = 30, 
	studentQuality = 1;

function createStudent() {

	student = new THREE.Mesh(

		new THREE.CubeGeometry(
			studentWidth,
			studentHeight,
			studentDepth,
			studentQuality,
			studentQuality,
			studentQuality),

		studentMaterial);

	// set students on each side of the table
	student.position.x = -fieldWidth/2 + studentWidth;

	// lift students over playing surface
	student.position.z = studentDepth;


	//student.receiveShadow = true;
	//student.castShadow = true;

	// // add the sphere to the scene
	scene.add(student);

}