var labs = [];
var labsFallingBorderX = fieldWidth * 0.8;
var labsFallingBorderY = fieldHeight * 0.8;

function createLab() {

    var loader = new THREE.FontLoader();
    loader.load('fonts/labfont.js', function (font) {
        var textGeo = new THREE.TextGeometry("LAB", {

            font: font,
            size: 30,
            height: 7,
            curveSegments: 12,

            bevelThickness: 2,
            bevelSize: 2,
            bevelEnabled: false

        });

        var textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});

        var mesh = new THREE.Mesh(textGeo, textMaterial);
        var x = (Math.random() - 0.5) * labsFallingBorderX;
        var y = (Math.random() - 0.4) * labsFallingBorderY;

        mesh.position.set(x, y, 300);

        mesh.rotation.x = 180 * Math.PI / 180;
        mesh.rotation.y = -90 * Math.PI / 180;
        mesh.rotation.z = 90 * Math.PI / 180;

        mesh.castShadow = true;

        scene.add(mesh);
        labs.push(mesh);
    });
}

function labsMovement() {
    for (var i = 0; i < labs.length; i++) {
        labs[i].position.z--;
    }

    if(labs.length && labs[0].position.z < -10) {
        //remove first lab from scene
        scene.remove(labs[0]);

        //remove first lab from array
        labs.splice(0,1);
    }
}

function removeLab(index) {
    scene.remove(labs[index]);
    labs.splice(index,1);
}


function initLabs() {
    THREE.Cache.enabled = true;

    var generateLab = function () {
        createLab();
        setTimeout(generateLab, 2000);
    };
    generateLab();
}