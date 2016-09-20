function main(){
	"use strict";

	var entity = new ActionEntity({x : -1, y : -1, step : .02});

	entity.draw();

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
	    // e.preventDefault(); // prevent the default action (scroll / move caret)
	});

	$(document).keyup(function(event) {
		switch(event.which || event.keyCode) {
			case 32:
	    		entity.jump();
	    		break;
	    	default: return;
		}
	 	e.preventDefault();
	})

};



