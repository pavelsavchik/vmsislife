var explosions = [];
var explosionSettings = {
	parts : 5,
	objectCount : 100,
	speed : 20,
	size : 3,
	colors : [ 0x0000FF, 0x00FF00, 0xFF0000, 0x00FFFF, 0xFFFFFF, ],
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