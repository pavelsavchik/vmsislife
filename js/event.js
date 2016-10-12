var events = [],
	eventTypes;

function createEvent(position, eventType, additionalMessage = "") {
	
	var eventType = eventTypes[eventType];

	var textGeo = new THREE.TextGeometry(eventType.message + additionalMessage, {

        font: eventType.font,
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

    event.lifeTime = eventType.lifeTime;
    event.moveDirection = eventType.direction;
    event.speed = eventType.speed;

    scene.add(event);
    events.push(event);
}

function initEvents() {
	eventTypes = {
		SUCCESS : {
			color : 0x00FF00,
			message : "zachteno",
			fontSize : 12,
			font : resources.defaultFont,
			direction : "z",
			speed : 1,
			lifeTime : 30
		},
		FAIL : {
			color : 0xFF0000,
			message : "potracheno",
			fontSize : 12,
			font : resources.defaultFont,
			direction : "z",
			speed : 1,
			lifeTime : 30
		},
		VEDOMA_CATCHED : {
			color : 0x0624E1,
			message : "vedoma",
			fontSize : 12,
			font : resources.defaultFont,
			direction : "z",
			speed : 1,
			lifeTime : 30
		},
		SEM : {
			color : 0x781311,
			message : "sem ",
			fontSize : 40,
			font : resources.bloodyFont,
			direction : "x",
			speed : -10,
			lifeTime : 100
		},
		DIPLOM : {
			color : 0x781311,
			message : "diplom",
			fontSize : 40,
			font : resources.bloodyFont,
			direction : "x",
			speed : -10,
			lifeTime : 100
		},
		WASTED : {
			color : 0xFF0000,
			message : "otchislen",
			fontSize : 40,
			font : resources.bloodyFont,
			direction : "x",
			speed : -10,
			lifeTime : 50
		},
		DIPLOM_PASSED : {
			color : 0x00AA00,
			message : "vmsis passed",
			fontSize : 40,
			font : resources.bloodyFont,
			direction : "x",
			speed : -10,
			lifeTime : 50
		},
		CATCH_VEDOMS : {
			color : 0x0000AA,
			message : "catch vedoms!!!",
			fontSize : 40,
			font : resources.bloodyFont,
			direction : "y",
			speed : -10,
			lifeTime : 50
		}
	}
}

function eventsMovement() {
	for (var i = 0; i < events.length; i++) {
		var event = events[i];
		if (event.lifeTime < 0) {
			if (!isWasted) {
				removeItem(events, i--);
			}
		} else {
			event.lifeTime--;
			event.position[event.moveDirection] += event.speed;
		}
	}
}

function removeEvents() {
	for(var i = events.length - 1; i >= 0; i--){
        removeItem(events, i);
    }
}