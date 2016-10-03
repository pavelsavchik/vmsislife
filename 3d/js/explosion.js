var explosions = [];
var explosionSettings = {
	objectCount : 500,
	speed : 20,
	size : 2,
	color : 0xFF0000,
	lifeTime : 10
};

function createExplosion(position) {
	
	var geometry = new THREE.Geometry();
  
	for (i = 0; i < explosionSettings.objectCount; i ++) { 
	    var vertex = new THREE.Vector3();
	    vertex.x = position.x;
	    vertex.y = position.y;
	    vertex.z = position.z;
	  
	    geometry.vertices.push(vertex);
	}

	var material = new THREE.ParticleBasicMaterial({
		size : explosionSettings.size,
		color : explosionSettings.color
	});
	
	var explosion = new THREE.ParticleSystem(geometry, material);
	explosion.lifeTime = explosionSettings.lifeTime;

    explosions.push(explosion)
    scene.add(explosion);
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