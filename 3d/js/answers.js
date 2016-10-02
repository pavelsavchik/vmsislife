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
        if (answers[i].position.z > maxHeight) {
            removeAnswer(i--);
        } else {
            answers[i].position.z += 4;
        }
        //if (answers.z > 300) {
            ///answers[i]
        //}
    }

}

function answersPhysics() {
    var removedAnswerIndexes = [];
    
    for (var j = 0; j < labs.length; j++) {
        var labText = labs[j].text;
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].position.z >= labs[j].position.z 
                && answers[i].position.x > labs[j].position.x - 40 && answers[i].position.x < labs[j].position.x + 40) {
                var clash = false,
                    textToReplace = "";

                if (labText.includes("L") && answers[i].position.y < labs[j].position.y + 20 && answers[i].position.y > labs[j].position.y - 20) {
                    clash = true;
                    textToReplace = "L";
                } else if (labText.includes("A") && answers[i].position.y < labs[j].position.y && answers[i].position.y > labs[j].position.y - 20) {
                    clash = true;
                    textToReplace = "A";
                } else if (labText.includes("B") && answers[i].position.y < labs[j].position.y - 20 && answers[i].position.y > labs[j].position.y - 40) {
                    clash = true;
                    textToReplace = "B";
                }

                if (clash) {
                    var positions = {
                        x : labs[j].position.x,
                        y : labs[j].position.y,
                        z : labs[j].position.z
                    };

                    var newText = labText.replace(textToReplace, "  ");

                    // removedAnswerIndexes.push(i);
                    scene.remove(answers[i]);
                    answers.splice(i--,1);

                    removeLab(j--);

                    if (newText.trim() !== "") {
                        createLab(positions, newText);
                    }
                }


            }
        }
    }

    // removeAnswers(removedAnswerIndexes)
}

function removeAnswer(index) {
    scene.remove(answers[index]);
    answers.splice(index,1);
}

function removeAnswers(indexArray) {
    for (var i = indexArray.length - 1; i >= 0; i--) {
        scene.remove(answers[indexArray[i]]);
        answers.splice(i,1);
    }
}