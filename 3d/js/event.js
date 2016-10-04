var events = [],
	eventTypes = {
		SUCCESS : {
			color : 0x00FF00,
			message : "passed",
			fontSize : 12
		},
		FAIL : {
			color : 0xFF0000,
			message : "wasted",
			fontSize : 12
		},
		VEDOMA_CATCHED : {
			color : 0x0624E1,
			message : "catched",
			fontSize : 12
		},
		SEM : {
			color : 0x781311,
			message : "sem ",
			fontSize : 24
		},
		OTCHISLEN : {
			color : 0xFF0000,
			message : "gone",
			fontSize : 24
		}
	},
	eventLifeTime = 30

function createEvent(position, eventType, additionalMessage = "") {
	
	var eventType = eventTypes[eventType];

	var textGeo = new THREE.TextGeometry(eventType.message + additionalMessage, {

        font: resources.defaultFont,
        size: eventType.fontSize,
        height: 3,
        curveSegments: 12,

    });

    var textMaterial = new THREE.MeshPhongMaterial({
    	color: eventType.color
    });

    var event = new THREE.Mesh(textGeo, textMaterial);
    
    event.position.set(position.x, position.y, position.z);

    event.rotation.x = 180 * Math.PI / 180;
    event.rotation.y = -90 * Math.PI / 180;
    event.rotation.z = 90 * Math.PI / 180;

    event.castShadow = true;

    event.lifeTime = 0;

    scene.add(event);
    events.push(event);
}

function eventsMovement() {
	for (var i = 0; i < events.length; i++) {
		if (events[i].lifeTime++ > eventLifeTime) {
			removeItem(events, i--);
		} else {
			events[i].position.z += 1;
		}
	}
}