//TODO: LEVELS (increase speed, fixed time for each level)
//TODO: Labels (vedoma catched, OTCHISLEN, labs failed)
//TODO: find better model for vedoma

var vedoms = [],
    vedomaSize = 30;

var vedomaRotationSpeed = 2 * Math.PI / 180;
var vedomaRotationAxis = new THREE.Vector3(0,0.5, 0);

function createVedoma() {

    var geometry = new THREE.PlaneGeometry( vedomaSize, vedomaSize / 2);
    var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    var vedoma = new THREE.Mesh( geometry, material );

    vedoma.position.x = (Math.random() - 0.5) * labsFallingBorderX;
    vedoma.position.y = (Math.random() - 0.4) * labsFallingBorderY;
    vedoma.position.z = 15;

    vedoma.rotation.x = 60 * Math.PI / 180;

    vedoma.castShadow = true;
    scene.add( vedoma );
    vedoms.push(vedoma);
}

function vedomsPhysics() {
    if(vedoms.length < failedLabs && Math.random() < 0.003 && !isWasted) {
        createVedoma();
    }

    for(var i = 0; i < vedoms.length; i++) {

        vedoms[i].rotateOnAxis(vedomaRotationAxis,vedomaRotationSpeed);

        var vedoma = vedoms[i];
        if (vedoma.position.x > student.position.x - vedomaSize / 2 && vedoma.position.x < student.position.x + vedomaSize / 2 &&
            vedoma.position.y > student.position.y - vedomaSize / 2 && vedoma.position.y < student.position.y + vedomaSize / 2) {

            removeItem(vedoms, i--);
            vedomaCatched();
            createEvent(vedoma.position, "VEDOMA_CATCHED");
        }
    }
}

function vedomaCatched() {
    if(failedLabs)
        failedLabs--;
    document.getElementById("failedLabs").innerHTML = failedLabs;
}


function removeVedoma(index) {
    scene.remove(vedoms[index]);
    vedoms.splice(index, 1);
}

function removeVedoms() {
    for(var i = vedoms.length - 1; i >= 0; i--){
        removeVedoma(i)
    }
}