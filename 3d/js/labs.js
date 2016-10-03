var labs = [];
var labsFallingBorderX = fieldWidth * 0.8;
var labsFallingBorderY = fieldHeight * 0.8;

function createLab(position, text = "LAB") {
    var loader = new THREE.FontLoader();
    loader.load('fonts/labfont.js', function (font) {
        var textGeo = new THREE.TextGeometry(text, {

            font: font,
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
    });
}

function labsMovement() {
    for (var i = 0; i < labs.length; i++) {
        labs[i].position.z -= .5;
        // labs[i].rotation.y += 2 * Math.PI / 180;
        // labs[i].rotation.x += 2 * Math.PI / 180;
    }

    if (labs.length && labs[0].position.z < -10) {
        //remove first lab from scene
        scene.remove(labs[0]);

        //remove first lab from array
        labs.splice(0, 1);
    }
}

function removeLab(index) {
    scene.remove(labs[index]);
    labs.splice(index, 1);
}


function initLabs() {
    THREE.Cache.enabled = true;

    var generateLab = function () {
        createLab();
        setTimeout(generateLab, 4000);
    };
    generateLab();
}