var explosions = [];
var explosionSettings = {
	parts : 10,
	objectCount : 50,
	speed : 20,
	size : 3,
	colors : [ 0x0000FF, 0x00FF00, 0xFF0000, 0x00FFFF, 0xFFFFFF, 0xC72705, 0x0624E1, 0x7A8AEF, 0x00FA50, 0x01C941, 0xF79600, 0xFF00C5, 0x00F3FF, 0x5500FF],
	lifeTime : 10
};

function createExplosion(position) {
	for (var j = 0; j < explosionSettings.parts; j++) {
		var geometry = new THREE.Geometry();
		
		for (i = 0; i < explosionSettings.objectCount; i ++) { 
		    var vertex = new THREE.Vector3();
		    vertex.x = position.x;
		    vertex.y = position.y;
		    vertex.z = position.z;
		  
		    geometry.vertices.push(vertex);
		}

		var material = new THREE.PointsMaterial({
			size : explosionSettings.size,
			color : generateColor()
		});
		
		var explosion = new THREE.Points(geometry, material);
		explosion.lifeTime = explosionSettings.lifeTime;

	    explosions.push(explosion)
	    scene.add(explosion);
	}
}


function explosionsPhysics() {
	for (var i = 0; i < explosions.length; i++) {
		var explosion = explosions[i];

		if (explosion.lifeTime-- > 0) {
			for (var j = 0; j < explosion.geometry.vertices.length; j++) {
				var vertice = explosion.geometry.vertices[j];
				vertice.x += Math.random() * explosionSettings.speed - explosionSettings.speed / 2;
				vertice.y += Math.random() * explosionSettings.speed - explosionSettings.speed / 2;
				vertice.z += Math.random() * explosionSettings.speed - explosionSettings.speed / 2;
			}
			explosion.geometry.verticesNeedUpdate = true;
		} else {
			removeExplosion(i--);
		}
	}
}

function removeExplosion(index) {
    scene.remove(explosions.splice(index,1)[0]);
}

function generateColor() {
	return explosionSettings.colors[Math.round(Math.random() * (explosionSettings.colors.length - 1))];
}