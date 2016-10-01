var labMesh = null;

function createLab() {

    var loader = new THREE.FontLoader();
    loader.load('fonts/labfont.js', function (font) {
        var textGeo = new THREE.TextGeometry("LAB", {

            font: font,
            size: 30,
            height: 4,
            curveSegments: 12,

            bevelThickness: 2,
            bevelSize: 2,
            bevelEnabled: false

        });

        var textMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});

        var mesh = new THREE.Mesh(textGeo, textMaterial);
        mesh.position.set(0, 0, 100);

        mesh.rotation.x = 180 * Math.PI / 180;
        mesh.rotation.y = -90 * Math.PI / 180;
        mesh.rotation.z = 90 * Math.PI / 180;

        scene.add(mesh);

        labMesh = mesh;
    });

    //alert(labs)
    //labs.push(mesh);
}

function labMovement() {
    //for (labMesh in labs) {
    //    //alert(labMesh)
    if(labMesh.position.z > 0)
        labMesh.position.z--;
    else
        labMesh.position.z = 300;
    //}
}