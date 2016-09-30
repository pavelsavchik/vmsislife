// ------------------------------------- //
// ------- GLOBAL VARIABLES ------------ //
// ------------------------------------- //

// scene object variables
var renderer, scene, camera, pointLight, spotLight;

// field variables
var fieldWidth = 200, fieldHeight = 200;

// paddle variables
var paddleWidth, paddleHeight, paddleDepth, paddleQuality;
var paddle1DirX = 0, paddle1DirY = 0, paddleSpeed = 3;


// ball variables
var ball, paddle1, paddle2;
var ballDirX = 1, ballDirY = 1, ballSpeed = 2;

// game-related variables
var score1 = 0, score2 = 0;
// you can change this to any positive whole number
var maxScore = 7;

// set opponent reflexes (0 - easiest, 1 - hardest)
var difficulty = 0.2;

// ------------------------------------- //
// ------- GAME FUNCTIONS -------------- //
// ------------------------------------- //

function setup()
{
	// update the board to reflect the max score for match win
	//document.getElementById("winnerBoard").innerHTML = "First to " + maxScore + " wins!";

	// now reset player and opponent scores
	score1 = 0;
	score2 = 0;

	// set up all the 3D objects in the scene
	createScene();

	// and let's get cracking!
	draw();
}


function createScene()
{
	// set the scene size
	var WIDTH = 640,
		HEIGHT = 360;

	// set some camera attributes
	var VIEW_ANGLE = 50,
		ASPECT = WIDTH / HEIGHT,
		NEAR = 0.1,
		FAR = 10000;

	var c = document.getElementById("gameCanvas");

	// create a WebGL renderer, camera
	// and a scene
	renderer = new THREE.WebGLRenderer();
	camera =
		new THREE.PerspectiveCamera(
			VIEW_ANGLE,
			ASPECT,
			NEAR,
			FAR);

	scene = new THREE.Scene();

	// add the camera to the scene
	scene.add(camera);

	// set a default position for the camera
	// not doing this somehow messes up shadow rendering
	camera.position.z = 320;

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
	plane.receiveShadow = true;

	var table = new THREE.Mesh(

		new THREE.CubeGeometry(
			planeWidth * 1.05,	// this creates the feel of a billiards table, with a lining
			planeHeight * 1.03,
			100,				// an arbitrary depth, the camera can't see much of it anyway
			planeQuality,
			planeQuality,
			1),

		tableMaterial);
	table.position.z = -51;	// we sink the table into the ground by 50 units. The extra 1 is so the plane can be seen
	//scene.add(table);
	table.receiveShadow = true;

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
	ball.receiveShadow = true;
	ball.castShadow = true;

	// // set up the paddle vars
	paddleWidth = 10;
	paddleHeight = 10;
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
	paddle1.receiveShadow = true;
	paddle1.castShadow = true;

	// set paddles on each side of the table
	paddle1.position.x = -fieldWidth/2 + paddleWidth;

	// lift paddles over playing surface
	paddle1.position.z = paddleDepth;

	// finally we finish by adding a ground plane
	// to show off pretty shadows
	var ground = new THREE.Mesh(

		new THREE.CubeGeometry(
			1000,
			1000,
			3,
			1,
			1,
			1 ),

		groundMaterial);
	// set ground to arbitrary z position to best show off shadowing
	ground.position.z = -132;
	ground.receiveShadow = true;
	scene.add(ground);

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
}

function draw()
{
	// draw THREE.JS scene
	renderer.render(scene, camera);
	// loop draw function call
	requestAnimationFrame(draw);
    //
	//ballPhysics();
	//paddlePhysics();
	cameraPhysics();
	playerPaddleMovement();
}

function cameraPhysics()
{
	// we can easily notice shadows if we dynamically move lights during the game

	// move to behind the player's paddle
	camera.position.x = paddle1.position.x - 100;
	camera.position.y += (paddle1.position.y - camera.position.y) * 0.05;
	camera.position.z = paddle1.position.z + 100 + 0.04 * (-ball.position.x + paddle1.position.x);

	// rotate to face towards the opponent
	camera.rotation.x = -0.01 * (ball.position.y) * Math.PI/180;
	camera.rotation.y = -60 * Math.PI/180;
	camera.rotation.z = -90 * Math.PI/180;
}

function playerPaddleMovement()
{
	// move left
	if (Key.isDown(Key.A))
	{
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
	else if (Key.isDown(Key.W))
	{
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


	// else don't move paddle
	else
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
