// lower 'segment' and 'ring' values will increase performance
var radius = 5,
    segments = 6,
    rings = 6;

var sphereGeometry = new THREE.SphereGeometry(
    radius,
    segments,
    rings);

var answers = [];

function createAnswer() {
    var sphereMaterial =
        new THREE.MeshLambertMaterial(
            {
                color: 0xD43001
            });

    var answer = new THREE.Mesh(sphereGeometry, sphereMaterial);

    answer.position.x = paddle1.position.x;
    answer.position.y = paddle1.position.y;
    answer.position.z = 20;
    scene.add(answer);

    answers.push(answer)
}

function answersMovement() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].position.z+=4;
    }
}