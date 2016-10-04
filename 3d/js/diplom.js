var diplomSpeed = 0.2;
var diplom = null;
var diplomDirX = 0, diplomDirY = 0;
var diplomScale = 1;

function createDiplom() {
    var textGeo = new THREE.TextGeometry("DYPLOM", {

        font: resources.defaultFont,
        size: 80,
        height: 10,
        curveSegments: 12,

        bevelThickness: 5,
        bevelSize: 1,
        bevelEnabled: true

    });

    var textMaterial = new THREE.MeshPhongMaterial({color: 0xFF000});

    var mesh = new THREE.Mesh(textGeo, textMaterial);

    position =  {
            x: 0,
            y: 300,
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
}

function runDiplom() {

}

function diplomPhysics() {

        for (var i = 0; i < answers.length; i++) {
            if (answers[i].position.z >= diplom.position.z
                && answers[i].position.x > diplom.position.x && answers[i].position.x < diplom.position.x + 50
                //&& answers[i].position.y > diplom.position.y && answers[i].position.y < diplom.position.y + 50
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
    diplom.position.z -= labSpeed;


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
    diplom.scale.set(diplomScale, diplomScale, diplomScale)
}
