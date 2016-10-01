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

    answer.position.x = student.position.x;
    answer.position.y = student.position.y;
    answer.position.z = 20;
    scene.add(answer);

    answers.push(answer)
}

function answersMovement() {

    for (var i = 0; i < answers.length; i++) {
        answers[i].position.z += 4;
        //if (answers.z > 300) {
            ///answers[i]
        //}
    }

}

function answersPhysics() {
    for (var i = 0; i < answers.length; i++) {
        for (var j = 0; j < labs.length; j++) {
            if (answers[i].position.x > labs[j].position.x - 50 && answers[i].position.x < labs[j].position.x + 50
                && answers[i].position.y > labs[j].position.y - 50 && answers[i].position.y < labs[j].position.y + 50) {
                labs[j].material.color.setHex(0xff0000);
            }
        }
    }
}