var labs = [],
    labsFallingBorderX = fieldWidth * 0.6,
    labsFallingBorderY = fieldHeight * 0.8,
    labSpeed = 0.2,
    labFontSize = 30,
    labFontHeight = 5,
    labsDefaultTimeout = 4000;

function createLab() {

    var position =  {
        x : Math.random() * labsFallingBorderX - labsFallingBorderX / 2,
        y : (Math.random() - 0.5)  * labsFallingBorderY + 40,
        z : maxHeight
    }, positionA = {
        x : position.x,
        y : position.y - 27,
        z : position.z
    }, positionB = {
        x : position.x,
        y : position.y - 62,
        z : position.z
    }

    var lab = {
        l : createLetter("L", position),
        a : createLetter("A", positionA),
        b : createLetter("B", positionB),
        position : position
    };
    
    labs.push(lab);
}

function createLetter(letter, position) {
    var textGeo = new THREE.TextGeometry(letter, {

        font : resources.defaultFont,
        size : labFontSize,
        height : labFontHeight,
        curveSegments : 12,

        bevelThickness : 5,
        bevelSize : 1,
        bevelEnabled : true

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

    scene.add(mesh);

    return mesh;
}

function labsMovement() {
    for (var i = 0; i < labs.length; i++) {
        var lab = labs[i];

        lab.position.z -= labSpeed;

        labs[i].l && (labs[i].l.position.z = lab.position.z);
        labs[i].a && (labs[i].a.position.z = lab.position.z);
        labs[i].b && (labs[i].b.position.z = lab.position.z);
        
        if (lab.position.z < 0) {
            failLab();
            createEvent(lab.position, "FAIL");
            removeLab(i--);
        }
    }

    if(labsInSemLeft <= 0 && labs.length == 0 && !isWasted)
        nextSem();
}

function removeLab(index) {
    var lab = labs[index];
    lab.l && scene.remove(lab.l);
    lab.a && scene.remove(lab.a);
    lab.b && scene.remove(lab.b);
    labs.splice(index, 1);
    setLabsInSemLeft(labsInSemLeft);
}

function removeLetter(letter, fromLab) {
    scene.remove(fromLab[letter]);
    fromLab[letter] = null;
}

function removeLabs(index) {
    for(var i = labs.length - 1; i >= 0; i--){
        removeLab(i)
    }
}

function initLabs() {
    THREE.Cache.enabled = true;

    var generateLab = function () {
        if (!isWasted) {
            if (labsInSemLeft > 0) {
                createLab();   
                setLabsInSemLeft(labsInSemLeft - 1);
            }
            setTimeout(generateLab, labsDefaultTimeout - currentSem * 200);
        }
    };
    setTimeout(generateLab, labsDefaultTimeout);
}

function passLab() {
    passedLabs++;
    passedLabsLabel.innerHTML = passedLabs;
}

function failLab() {
    failedLabs++;
    failedLabsLabel.innerHTML = failedLabs;
}