var student;

var studentMaterial =
	new THREE.MeshLambertMaterial(
		{
			color: 0x1B32C0
		});

var studentWidth = 20,
	studentHeight = 20, 
	studentDepth = -10,
	studentQuality = 1;

function createStudent() {
	student = resources.studentModel;
	student.position.x = -fieldWidth/2 + studentWidth;

	// lift students over playing surface
	student.position.z = studentDepth;
	student.scale.set(10,10,10);

	student.rotation.x = 90 * Math.PI / 180;
	scene.add(student);
}