var labs = [];
var labsFallingBorderX = fieldWidth * 0.8;
var labsFallingBorderY = fieldHeight * 0.8;
var labSpeed = 0.5

function createLab(position, text = "LAB") {
    var textGeo = new THREE.TextGeometry(text, {

        font: resources.defaultFont,
        size: 30,
        height: 5,
        curveSegments: 12,

        bevelThickness: 5,
        bevelSize: 1,
        bevelEnabled: true

    });

    var textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});

    var mesh = new THREE.Mesh(textGeo, textMaterial);
    
    position = position || {
        x : (Math.random() - 0.5) * labsFallingBorderX,
        y : (Math.random() - 0.4) * labsFallingBorderY,
        z : maxHeight
    };

    mesh.position.set(position.x, position.y, position.z);

    mesh.rotation.x = 180 * Math.PI / 180;
    mesh.rotation.y = -90 * Math.PI / 180;
    mesh.rotation.z = 90 * Math.PI / 180;

    mesh.castShadow = true;
    mesh.text = text;
    scene.add(mesh);
    labs.push(mesh);
}

function labsMovement() {
    for (var i = 0; i < labs.length; i++) {
        labs[i].position.z -= labSpeed;
        
        if (labs[i].position.z < 0) {
            //remove first lab from scene
            failLab();

            createEvent(labs[i].position, "FAIL");

            scene.remove(labs[i]);

            //remove first lab from array
            labs.splice(i--, 1);
        }
    }
}

function removeLab(index) {
    scene.remove(labs[index]);
    labs.splice(index, 1);
}

function removeLabs(index) {
    for(var i = labs.length - 1; i >= 0; i--){
        removeLab(i)
    }
}

function initLabs() {
    THREE.Cache.enabled = true;

    var generateLab = function () {
        createLab();
        setTimeout(generateLab, 4000);
    };
    generateLab();
}

function passLab() {
    passedLabs++;
    document.getElementById("passedLabs").innerHTML = passedLabs;
}

function failLab() {
    failedLabs++;
    document.getElementById("failedLabs").innerHTML = failedLabs;
}