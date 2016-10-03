// lower 'segment' and 'ring' values will increase performance
var radius = 5,
    segments = 12,
    rings = 12;

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

    answer.castShadow = true;

    scene.add(answer);

    answers.push(answer)
}

function answersMovement() {

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].position.z > maxHeight) {
            removeAnswer(i--);
        } else {
            answers[i].position.z += 4;
        }
    }

}

function answersPhysics() {
    var removedAnswerIndexes = [];
    
    for (var j = 0; j < labs.length; j++) {
        var labText = labs[j].text;
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].position.z >= labs[j].position.z 
                && answers[i].position.x > labs[j].position.x - 30 && answers[i].position.x < labs[j].position.x + 30) {
                var clash = false,
                    textToReplace = "",
                    dY = 0;

                if (labText.includes("L") && answers[i].position.y < labs[j].position.y && answers[i].position.y > labs[j].position.y - 30) {
                    clash = true;
                    textToReplace = "L";
                } else if (labText.includes("A") && answers[i].position.y < labs[j].position.y - 20 && answers[i].position.y > labs[j].position.y - 50) {
                    clash = true;
                    textToReplace = "A";
                    dY = -30;
                } else if (labText.includes("B") && answers[i].position.y < labs[j].position.y - 50 && answers[i].position.y > labs[j].position.y - 90) {
                    clash = true;
                    textToReplace = "B";
                    dY = -50;
                }

                if (clash) {
                    var newText = labText.replace(textToReplace, "  ");
                    if (newText.trim() !== "") {
                        createLab({
                            x : labs[j].position.x,
                            y : labs[j].position.y,
                            z : labs[j].position.z
                        }, newText);
                    }

                    createExplosion({
                        x : labs[j].position.x,
                        y : labs[j].position.y + dY,
                        z : labs[j].position.z + 15
                    });

                    removeAnswer(i);
                    removeLab(j--);
                }


            }
        }
    }
}

function removeAnswer(index) {
    scene.remove(answers[index]);
    answers.splice(index,1);
}