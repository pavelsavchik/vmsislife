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
    answer.position.z = 60;

    answer.castShadow = true;

    scene.add(answer);

    answers.push(answer)
}

function answersMovement() {

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].position.z > maxHeight) {
            removeItem(answers, i--);
        } else {
            answers[i].position.z += 4;
        }
    }

}

function answersPhysics() {
    var removedAnswerIndexes = [];
    
    for (var j = 0; j < labs.length; j++) {
        
        var lab = labs[j],
            labL = lab.l,
            labA = lab.a,
            labB = lab.b;

        for (var i = 0; i < answers.length; i++) {
            if (answers[i] && answers[i].position.z >= lab.position.z && answers[i].position.x > lab.position.x - 30 && answers[i].position.x < lab.position.x + 30) {
                
                var letterToRemove = "";

                if (labL && answers[i].position.y < labL.position.y && answers[i].position.y > labL.position.y - labFontSize) {
                    letterToRemove = "l";
                } else if (labA && answers[i].position.y < labA.position.y && answers[i].position.y > labA.position.y - labFontSize) {
                    letterToRemove = "a";
                } else if (labB && answers[i].position.y < labB.position.y && answers[i].position.y > labB.position.y - labFontSize) {
                    letterToRemove = "b";
                }

                if (letterToRemove) {

                    createExplosion(lab[letterToRemove].position);

                    removeLetter(letterToRemove, lab);

                    if (!lab.l && !lab.a && !lab.b) {
                        passLab();
                        createEvent(lab.position, "SUCCESS");
                        removeItem(labs, j--);
                    }

                    removeItem(answers, i);

                    break;
                }
            }
        }
    }
}

function removeAnswer(index) {
    removeItem(answers, index);
}

function removeAnswers() {
    for(var i = answers.length - 1; i >= 0; i--){
        removeAnswer(i);
    }
}