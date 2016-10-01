// ------------------------------------- //
// ------- GLOBAL VARIABLES ------------ //
// ------------------------------------- //

// scene object variables
var renderer, scene, camera, pointLight;

// field variables
var fieldWidth = 300, fieldHeight = 300;

// paddle variables
var paddleWidth, paddleHeight, paddleDepth, paddleQuality;
var paddle1DirX = 0, paddle1DirY = 0, paddleSpeed = 5;


// ball variables
var ball, paddle1;

// game-related variables
var score = 0;
// you can change this to any positive whole number
var maxScore = 20;

// ------------------------------------- //
// ------- GAME FUNCTIONS -------------- //
// ------------------------------------- //

function setup()
{
	score = 0;
	createScene();
	draw();
}


function createScene()
{
	// scene size
	var WIDTH = 640,
		HEIGHT = 500;

	// camera attributes
	var VIEW_ANGLE = 50,
		ASPECT = WIDTH / HEIGHT,
		NEAR = 0.1,
		FAR = 10000;

	var c = document.getElementById("gameCanvas");

	renderer = new THREE.WebGLRenderer();
	camera =
		new THREE.PerspectiveCamera(
			VIEW_ANGLE,
			ASPECT,
			NEAR,
			FAR);

	scene = new THREE.Scene();

	scene.add(camera);

	// start the renderer
	renderer.setSize(WIDTH, HEIGHT);

	// attach the render-supplied DOM element
	c.appendChild(renderer.domElement);

	// set up the playing surface plane
	var planeWidth = fieldWidth,
		planeHeight = fieldHeight,
		planeQuality = 10;

	// create the paddle1's material
	var paddle1Material =
		new THREE.MeshLambertMaterial(
			{
				color: 0x1B32C0
			});

	// create the plane's material
	var planeMaterial =
		new THREE.MeshLambertMaterial(
			{
				color: 0x4BD121
			});
	// create the table's material
	var tableMaterial =
		new THREE.MeshLambertMaterial(
			{
				color: 0x111111
			});
	// create the pillar's material
	var pillarMaterial =
		new THREE.MeshLambertMaterial(
			{
				color: 0x534d0d
			});
	// create the ground's material
	var groundMaterial =
		new THREE.MeshLambertMaterial(
			{
				color: 0x888888
			});


	// create the playing surface plane
	var plane = new THREE.Mesh(

		new THREE.PlaneGeometry(
			planeWidth * 0.95,	// 95% of table width, since we want to show where the ball goes out-of-bounds
			planeHeight,
			planeQuality,
			planeQuality),

		planeMaterial);

	scene.add(plane);
	//plane.receiveShadow = true;

	// // set up the sphere vars
	// lower 'segment' and 'ring' values will increase performance
	var radius = 5,
		segments = 6,
		rings = 6;

	// // create the sphere's material
	var sphereMaterial =
		new THREE.MeshLambertMaterial(
			{
				color: 0xD43001
			});

	// Create a ball with sphere geometry
	ball = new THREE.Mesh(

		new THREE.SphereGeometry(
			radius,
			segments,
			rings),

		sphereMaterial);

	// // add the sphere to the scene
	scene.add(ball);

	ball.position.x = 0;
	ball.position.y = 0;
	// set ball above the table surface
	ball.position.z = radius;
	//ball.receiveShadow = true;
	ball.castShadow = true;

	// // set up the paddle vars
	paddleWidth = 20;
	paddleHeight = 20;
	paddleDepth = 30;
	paddleQuality = 1;

	paddle1 = new THREE.Mesh(

		new THREE.CubeGeometry(
			paddleWidth,
			paddleHeight,
			paddleDepth,
			paddleQuality,
			paddleQuality,
			paddleQuality),

		paddle1Material);

	// // add the sphere to the scene
	scene.add(paddle1);
	//paddle1.receiveShadow = true;
	//paddle1.castShadow = true;

	// set paddles on each side of the table
	paddle1.position.x = -fieldWidth/2 + paddleWidth;

	// lift paddles over playing surface
	paddle1.position.z = paddleDepth;

	// // create a point light
	pointLight =
		new THREE.PointLight(0xF8D898);

	// set its position
	pointLight.position.x = -1000;
	pointLight.position.y = 0;
	pointLight.position.z = 1000;
	pointLight.intensity = 2.9;
	pointLight.distance = 10000;
	// add to the scene
	scene.add(pointLight);

	createLab()
}

function draw()
{
	renderer.render(scene, camera);
	requestAnimationFrame(draw);
    //
	cameraPhysics();
	labMovement();
	playerPaddleMovement();
}

function cameraPhysics()
{
	//TODO: Dynamic camera?
	camera.position.x = -320;
	camera.position.y = 0;
	camera.position.z = 300;

	// rotate to face towards the opponent
	camera.rotation.x = -0.01 * (ball.position.y) * Math.PI/180;
	camera.rotation.y = -60 * Math.PI/180;
	camera.rotation.z = -90 * Math.PI/180;
}

function playerPaddleMovement()
{
	var isMoves = false;
	// move left
	if (Key.isDown(Key.A))
	{
		isMoves = true;
		// if paddle is not touching the side of table
		// we move
		if (paddle1.position.y < fieldHeight * 0.45)
		{
			paddle1DirY = paddleSpeed * 0.5;
		}
		// else we don't move and stretch the paddle
		// to indicate we can't move
		else
		{
			paddle1DirY = 0;
			paddle1.scale.z += (10 - paddle1.scale.z) * 0.2;
		}
	}
	// move right
	else if (Key.isDown(Key.D))
	{
		isMoves = true;
		// if paddle is not touching the side of table
		// we move
		if (paddle1.position.y > -fieldHeight * 0.45)
		{
			paddle1DirY = -paddleSpeed * 0.5;
		}
		// else we don't move and stretch the paddle
		// to indicate we can't move
		else
		{
			paddle1DirY = 0;
			paddle1.scale.z += (10 - paddle1.scale.z) * 0.2;
		}
	}

	// move up
	if (Key.isDown(Key.W))
	{
		isMoves = true;
		// if paddle is not touching the side of table
		// we move
		if (paddle1.position.x < fieldWidth * 0.45)
		{
			paddle1DirX = paddleSpeed * 0.5;
		}
		// else we don't move and stretch the paddle
		// to indicate we can't move
		else
		{
			paddle1DirX = 0;
			paddle1.scale.z += (10 - paddle1.scale.z) * 0.2;
		}
	}
	// move down
	else if (Key.isDown(Key.S))
	{
		isMoves = true;
		// if paddle is not touching the side of table
		// we move
		if (paddle1.position.x > -fieldWidth * 0.45)
		{
			paddle1DirX = -paddleSpeed * 0.5;
		}
		// else we don't move and stretch the paddle
		// to indicate we can't move
		else
		{
			paddle1DirX = 0;
			paddle1.scale.z += (10 - paddle1.scale.z) * 0.2;
		}
	}

	if (Key.isDown(Key.SPACE))
	{
		alert("piy piy");
		//while(Key.isDown(Key.SPACE));
	}

	// else don't move paddle
	if(!isMoves)
	{
		// stop the paddle
		paddle1DirY = 0;
		paddle1DirX = 0;
	}

	paddle1.scale.y += (1 - paddle1.scale.y) * 0.2;
	paddle1.scale.z += (1 - paddle1.scale.z) * 0.2;

	paddle1.position.y += paddle1DirY;
	paddle1.position.x += paddle1DirX;
}

