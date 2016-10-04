// ------------------------------------- //
// ------- GLOBAL VARIABLES ------------ //
// ------------------------------------- //

// scene object variables
var renderer, scene, camera, pointLight;

// field variables
var fieldWidth = 300, fieldHeight = 500;
var sceneWidth, sceneHeight, maxHeight = 300;

// student variables
var studentDirX = 0, studentDirY = 0, studentSpeed = 5;

// game-related variables
var passedLabs = 0;
var failedLabs = 0;
// you can change this to any positive whole number
var maxScore = 20;

var defaultFont;

var currentSem = 1;

// ------------------------------------- //
// ------- GAME FUNCTIONS -------------- //
// ------------------------------------- //

function setup()
{
	loadResources(function() {
		createScene();
		createLight();
		createCamera();
		createSurface();
		createStudent();
		initLabs();
		draw();
		// nextSem();
	});
}

function nextSem() {

	if (failedLabs > 0) {
		removeLabs();
		removeVedoms();

		createEvent({
			x : 0,
			y : 0,
			z : 100
		}, "OTCHISLEN");
		
	} else {
		labSpeed += 0.5;
			createEvent({
			x : 0,
			y : 0,
			z : 100
		}, "SEM", currentSem++);
		setTimeout(nextSem, 10000);
	}
}


function createScene()
{
	// scene size
	sceneWidth = 840, sceneHeight = 500;

	renderer = new THREE.WebGLRenderer();
	scene = new THREE.Scene();
	renderer.setSize(sceneWidth, sceneHeight);

	var c = document.getElementById("gameCanvas");
	c.appendChild(renderer.domElement);
}

function createLight() {
	pointLight = new THREE.PointLight(0xF8D898);

	pointLight.position.x = -1000;
	pointLight.position.y = 0;
	pointLight.position.z = 1000;
	pointLight.intensity = 2.9;
	pointLight.distance = 10000;

	scene.add(pointLight);

	//spotLight = new THREE.SpotLight(0xFF0000);
	//spotLight.position.set(0, 0, 460);
	//spotLight.intensity = .1;
	//spotLight.castShadow = true;
	// spotLight.shadowMapWidth = 1024;
	// spotLight.shadowMapHeight = 1024;
	
	//scene.add(spotLight);

	//renderer.shadowMapEnabled = true;
	//renderer.shadowMapType = THREE.PCFSoftShadowMap;
}

function draw()
{
	explosionsPhysics();
	answersPhysics()
	labsMovement();
	answersMovement();
	eventsMovement();
	playerPaddleMovement();
	vedomsPhysics();

	renderer.render(scene, camera);
	requestAnimationFrame(draw);
}

function createCamera()
{

	// camera attributes
	var VIEW_ANGLE = 50,
		ASPECT = sceneWidth / sceneHeight,
		NEAR = 0.1,
		FAR = 10000;

	camera = new THREE.PerspectiveCamera(
			VIEW_ANGLE,
			ASPECT,
			NEAR,
			FAR);

	scene.add(camera);

	//TODO: Dynamic camera?
	camera.position.x = -350;
	camera.position.y = 0;
	camera.position.z = 300;

	// rotate to face towards the opponent
	//camera.rotation.x = -0.01 * (ball.posicreateAnswer()tion.y) * Math.PI/180;
	camera.rotation.y = -60 * Math.PI/180;
	camera.rotation.z = -90 * Math.PI/180;
}

function playerPaddleMovement()
{
	var isMoves = false;
	// move left
	if (Key.isDown(Key.A))
	{
		if (student.position.y < fieldHeight * 0.45)
		{
			isMoves = true;
			studentDirY = studentSpeed * 0.5;
		}
	}
	// move right
	else if (Key.isDown(Key.D))
	{
		if (student.position.y > -fieldHeight * 0.45)
		{
			isMoves = true;
			studentDirY = -studentSpeed * 0.5;
		}
	}

	// else don't move
	if(!isMoves)
	{
		studentDirY = 0;
	}
	isMoves = false;

	// move up
	if (Key.isDown(Key.W))
	{
		if (student.position.x < fieldWidth * 0.45)
		{
			isMoves = true;
			studentDirX = studentSpeed * 0.5;
		}
	}
	// move down
	else if (Key.isDown(Key.S))
	{
		if (student.position.x > -fieldWidth * 0.45)
		{
			isMoves = true;
			studentDirX = -studentSpeed * 0.5;
		}
	}

	if(!isMoves)
	{
		studentDirX = 0;
	}


	if (Key.isUp(Key.SPACE))
	{
		createAnswer()
		//while(Key.isDown(Key.SPACE));
	}


	//student.scale.y += (1 - student.scale.y) * 0.2;
	//student.scale.z += (1 - student.scale.z) * 0.2;
	if (student) {
		student.position.y += studentDirY;
		student.position.x += studentDirX;	
	}	
}

function removeItem(from, index) {
	scene.remove(from[index]);
    from.splice(index, 1);
}
