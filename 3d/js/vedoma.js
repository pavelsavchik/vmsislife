// lower 'segment' and 'ring' values will increase performance
// var radius = 5,
//     segments = 12,
//     rings = 12;

// var sphereGeometry = new THREE.SphereGeometry(
//     radius,
//     segments,
//     rings);

//TODO: Vedomas catching
//TODO: LEVELS (increase speed, fixed time for each level)
//TODO: Labels (vedoma catched, OTCHISLEN, labs failed)

var vedoms = [];

function createVedoma() {


    //TODO: Maybe replace by cube geometry?
    var loader = new THREE.ObjectLoader();
    loader.load("models/vedoma.json",function ( obj ) {

        obj.position.x = (Math.random() - 0.5) * labsFallingBorderX;
        obj.position.y = (Math.random() - 0.4) * labsFallingBorderY;
        obj.position.z = 5;

        obj.castShadow = true;


        obj.scale.set(100,100,100);
        scene.add(obj);

        vedoms.push(obj);
    });


}

function vedomsPhysics() {
    if(failedLabs && Math.random() < 0.003) {
        createVedoma();
    }

    for(var i = 0; i < vedoms.lenght; i++) {
        //IF POS CATCH VEDOMA
    }


}

function catchVedoma() {
    //ADD TEXT 'VEDOMA CATCHED'
}



