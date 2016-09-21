function main(){
	"use strict";


	Utils.resize();

	var entity = new HeroEntity({x : 100, y : 100, step : 30});
	entity.draw();

	var earth = new EarthEntity({x: 0, y: 0});
	earth.draw();	

	var vedomas = [];

	var generateLab = function() {
		var text = new LabEntity({x : Math.random() * 600, y : 700}, vedomas);
		text.draw();
		setTimeout(generateLab, 2000);
	}

	setTimeout(generateLab, 2000);

	$(document).keydown(function(event) {
	    switch(event.which || event.keyCode) {	
	        case 37: 
		        entity.right();
		        break;

	        case 38:
		        // entity.top();
		        break;

	        case 39:
		        entity.left();
		        break;

	        case 40:
		        // entity.down();
		        break;

	        default: return; // exit this handler for other keys
	    }
	    event.preventDefault(); // prevent the default action (scroll / move caret)
	});

	$(document).keyup(function(event) {
		switch(event.which || event.keyCode) {
			case 32:
	    		vedomas.push(entity.fire());
	    		break;
	    	default: return;
		}
	 	event.preventDefault();
	})

};



