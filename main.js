function main(){
	"use strict";

	// var entity = new ActionEntity({x : -1, y : -1, step : .02});

	Utils.resize();
	// entity.draw();

	var generateLab = function() {
		var text = new LabEntity({x : Math.random() * 600, y : 700})
		text.draw();
		setTimeout(generateLab, 1000);
	}

	var earth = new EarthEntity({x: 100, y: 100});
	earth.draw();	

	setTimeout(generateLab, 1000);

	// var textEntity = new TextEntity({x : -.5, y : -.3}, "Hello world");
	// textEntity.draw();

	$(document).keydown(function(event) {
	    switch(event.which || event.keyCode) {	
	        case 37: 
		        entity.right();
		        break;

	        case 38:
		        entity.top();
		        break;

	        case 39:
		        entity.left();
		        break;

	        case 40:
		        entity.down();
		        break;

	        default: return; // exit this handler for other keys
	    }
	    event.preventDefault(); // prevent the default action (scroll / move caret)
	});

	$(document).keyup(function(event) {
		switch(event.which || event.keyCode) {
			case 32:
	    		entity.jump();
	    		break;
	    	default: return;
		}
	 	event.preventDefault();
	})

};



