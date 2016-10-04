//TODO: LEVELS (increase speed, fixed time for each level)
//TODO: Labels (vedoma catched, OTCHISLEN, labs failed)
//TODO: find better model for vedoma

var vedoms = [],
    vedomaSize = 50;

function createVedoma() {
    var loader = new THREE.ObjectLoader();
    loader.load("models/vedoma.json",function ( obj ) {

        obj.position.x = (Math.random() - 0.5) * labsFallingBorderX;
        obj.position.y = (Math.random() - 0.4) * labsFallingBorderY;
        obj.position.z = 5;

        obj.castShadow = true;


        obj.scale.set(vedomaSize,vedomaSize,vedomaSize);
        scene.add(obj);

        vedoms.push(obj);
    });
}

function vedomsPhysics() {
    if(vedoms.length < failedLabs && Math.random() < 0.003) {
        createVedoma();
    }

    for(var i = 0; i < vedoms.length; i++) {
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
    failedLabs--;
    document.getElementById("failedLabs").innerHTML = failedLabs;
    passLab();
}