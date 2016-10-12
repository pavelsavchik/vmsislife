// ------------------------------------- //
// ------- GLOBAL VARIABLES ------------ //
// ------------------------------------- //

// scene object variables
var renderer, scene, camera, pointLight;

// field variables
var fieldWidth = 300, fieldHeight = 500;
var sceneWidth, sceneHeight, maxHeight = 300;

// game-related variables
var passedLabs = 0;
var failedLabs = 0;
// you can change this to any positive whole number
var maxScore = 20;

var defaultFont;
var diplomRunned = false;

var currentSem = 0;
var LABS_PER_SEM = 8;
var labsInSemLeft = LABS_PER_SEM;
var isVedomsModeRunned = false;
var isVedomsModeFinished = false;

var passedLabsLabel, failedLabsLabel;

var isWasted = false;

// ------------------------------------- //
// ------- GAME FUNCTIONS -------------- //
// ------------------------------------- //

function setup()
{
	passedLabsLabel = document.getElementById("passedLabs");
	failedLabsLabel = document.getElementById("failedLabs");

	loadResources(function() {
		createScene();
		createLight();
		createCamera();
		createSurface();
		createStudent();
		initEvents();
		finishPageLoading();
		draw();
		initLabs();
		nextSem();
	});
}

function nextSem() {
	if(failedLabs > 0 && !isVedomsModeRunned){
		runVedomsMode();}
	else if (failedLabs > 0 && isVedomsModeRunned && !isVedomsModeFinished){
		return;
	}else if (failedLabs > 0 && isVedomsModeFinished) {
		isVedomsModeFinished = false;
		removeLabs();
		removeEvents();
		removeVedoms();
		removeAnswers();

		convertStudentToMilitary();

		createEvent({
			x : 500,
			y : 120,
			z : 150
		}, "WASTED");

		isWasted = true
	} else {
		if(currentSem == 9) {
			createEvent({
			x : 500,
			y : 80,
			z : 150
		}, "DIPLOM");
			createDiplom();
		} else {
			labSpeed += 0.2;
			createEvent({
				x : 500,
				y : 80,
				z : 150
			}, "SEM", ++currentSem);
			labsInSemLeft = LABS_PER_SEM;
		}
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

	spotLight = new THREE.SpotLight(0xFF0000);
	spotLight.position.set(0, 0, 460);
	spotLight.intensity = .1;
	spotLight.castShadow = true;
	spotLight.shadowMapWidth = 1024;
	spotLight.shadowMapHeight = 1024;
	
	scene.add(spotLight);

	renderer.shadowMapEnabled = true;
	renderer.shadowMapType = THREE.PCFSoftShadowMap;
}

function draw()
{
	answersPhysics();
	answersMovement();
	playerPaddleMovement();
	explosionsPhysics();
	eventsMovement();

	if(!diplomRunned) {
		labsMovement();
		vedomsPhysics();
	} else {
		diplomMovement();
		diplomPhysics();
	}

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

function removeItem(from, index) {
	scene.remove(from[index]);
    from.splice(index, 1);
}
