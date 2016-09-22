var fragmentColors = {
	colors : (function() {
		return Utils.convertColors([
			   		200,0,0,1,
			   		200,0,0,0.3,
			   		200,0,0,1,

			   		200,0,0,1,
			   		200,0,0,1,
			   		200,0,0,.3,

			   		200,0,0,1,
			   		200,0,0,1,
			   		200,0,0,.3,

			   		200,0,0,1,
			   		200,0,0,1,
			   		200,0,0,.3,

			   		200,0,0,1,
			   		200,0,0,1,
			   		200,0,0,.3,

			   		200,0,0,1,
			   		200,0,0,1,
			   		200,0,0,.3,
			   	])
	})()
}

class FragmentEntity extends BaseEntity {
	constructor(position) {
		super(position);
		this.size = 5;

		this.randomValue = Utils.random(10, 30);
		
		this.getPositions = function(x, y) {
			var size = this.size,
				sizeD2 = size / 2,
				sizeD4 = size / 4,
				sizeD8 = size / 8,
				sizeD16 = size / 16,
				randomValue = this.randomValue;
			return [
				x + sizeD8, y, 1,
				x + size + randomValue, y, 1,
				x + sizeD2, y + sizeD4, 1,

				x + sizeD8, y - sizeD8, 1,
				x + sizeD2, y - sizeD4, 1,
				x + sizeD2 + randomValue, y - size, 1,

				x - sizeD16, y, 1,
				x - sizeD4, y - sizeD8, 1,
				x - (sizeD2 + randomValue), y + sizeD2, 1,

				x - sizeD8, y - sizeD16, 1,
				x - sizeD16, y - sizeD4, 1,
				x - sizeD2, y - size, 1,

				x - sizeD16, y + sizeD16, 1,
				x + sizeD8, y + sizeD4, 1,
				x + sizeD16, y + size + randomValue, 1,

				x, y - sizeD16, 1,
				x - sizeD16, y - sizeD4, 1,
				x + sizeD8, y - (size + randomValue), 1,
			];
		};
	}
}

FragmentEntity.prototype.getArrays = function(x, y) {
	var positions = this.getPositions(x, y);
	return  {
	   position: this.absoluteToRelative(positions),
	   color : fragmentColors.colors
	};
}

FragmentEntity.prototype.draw = function() {
	function _draw(time) {
		this.size += 5;
		this.display(time);
		if (this.size < 50) {
	    	requestAnimationFrame(_draw.bind(this));
		}
	}

	requestAnimationFrame(_draw.bind(this));
};