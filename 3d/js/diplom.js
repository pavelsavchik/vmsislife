var diplomSpeed = 0.4;
var diplom = null;
var diplomDirX = 0, diplomDirY = 0;
var diplomScale = 1;
var diplomSize = 80;

function createDiplom() {
    var textGeo = new THREE.TextGeometry("DIPLOM", {

        font: resources.defaultFont,
        size: diplomSize,
        height: 20,
        curveSegments: 12,

        bevelThickness: 5,
        bevelSize: 1,
        bevelEnabled: true

    });

    var textMaterial = new THREE.MeshPhongMaterial({color: 0xAA0000});

    var mesh = new THREE.Mesh(textGeo, textMaterial);

    position =  {
            x: 0,
            y: 250,
            z: maxHeight
        };

    mesh.position.set(position.x, position.y, position.z);

    mesh.rotation.x = 180 * Math.PI / 180;
    mesh.rotation.y = -90 * Math.PI / 180;
    mesh.rotation.z = 90 * Math.PI / 180;

    mesh.castShadow = true;
    mesh.text = "DYPLOM";
    scene.add(mesh);
    diplom = mesh;

    diplomRunned = true;
}

function diplomPhysics() {

        for (var i = 0; i < answers.length; i++) {
            if (answers[i].position.z >= diplom.position.z
                && answers[i].position.x < diplom.position.x && answers[i].position.x > diplom.position.x - 50
                && answers[i].position.y < diplom.position.y && answers[i].position.y > diplom.position.y - diplomSize * diplomScale * 6
            )
            {

                createExplosion({
                    x: answers[i].position.x,
                    y: answers[i].position.y,
                    z: answers[i].position.z + 15
                });

                removeItem(answers, i);
                makeDiplomSmaller();

            }
        }
}

function diplomMovement() {
    diplom.position.z -= diplomSpeed;


    //var rand = Math.random();
    //if(rand < 0.25) diplomDirX+=diplomSpeed
    //else if(rand >= 0.25 && rand < 0.5) diplomDirX  -= diplomSpeed
    //else if(rand >= 0.5 && rand < 0.75) diplomDirY  += diplomSpeed
    //else if(rand >= 0.75) diplomDirY  -= diplomSpeed
    //
    //if(diplom.position.x >= labsFallingBorderX || diplom.position.x <= -labsFallingBorderX) diplomDirX = diplomDirX
    //else if(diplom.position.y >= labsFallingBorderY || diplom.position.y <= -labsFallingBorderY ) diplomDirY = -diplomDirY
    //
    //diplom.position.x += diplomDirX;
    //diplom.position.y += diplomDirY;




    //diplom.position.x += (Math.random() - 0.5) * labSpeed * 20;
    //
    //diplom.position.y += (Math.random() - 0.5) * labSpeed * 20;

}

function makeDiplomSmaller(){
    diplomScale -= 0.05;
    diplom.scale.set(diplomScale, diplomScale, diplomScale);
    diplom.position.y -= 10;

    if(diplomScale <= 0){
        passDiplom()
    }
}

function passDiplom() {
    //alert('TI SDAL DIPLOM');
    salut();
    createEvent({
        x : 500,
        y : 160,
        z : 150
    }, "DIPLOM_PASSED")
    isWasted = true
}

function salut(){
    //for(var i = 0; i < 1000; i++) {
    //    createExplosion({
    //        x: (Math.random() - 0.5) * 300 ,
    //        y: (Math.random() - 0.5) * 300 ,
    //        z: (Math.random() - 0.5) * 300
    //    });
    //
    //}

}