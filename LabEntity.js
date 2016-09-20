class LabEntity extends BaseEntity {
	constructor(position, text) {
		super(position);
		var size = 20,
			sizeD2 = size / 2,
			sizeD4 = size / 4,
			sizeM5 = size * 5;
		this.getLetterL = function(x, y) {
			return [
				x - size, y - size, 1,
				x - size, y + size, 1,
				x - sizeD2, y + size, 1,

				x - size, y - size, 1,
				x - sizeD2, y - size, 1,
				x - sizeD2, y + size, 1,

				x - sizeD2, y - sizeD2, 1,
				x, y - sizeD2, 1,
				x - sizeD2, y - size, 1,

				x, y - sizeD2, 1,
				x, y - size, 1,
				x - sizeD2, y - size, 1,
				
			];
		};

		this.LColors = [
			0,0,0,1,
			0,0,0,1,
			0,0,0,1,

			0,0,0,1,
			0,0,0,1,
			0,0,0,1,

			0,0,0,1,
			0,0,0,1,
			0,0,0,1,

			0,0,0,1,
			0,0,0,1,
			0,0,0,1,
		];

		this.getLetterA = function(x, y) {
			return [
				x + size, y + size, 1,
				x - size, y + size, 1,
				x - size, y - size, 1,

				x + size, y + size, 1,
				x + size, y - size, 1,
				x - size, y - size, 1,

				x + size /3, y - sizeD2, 1,
				x - sizeD2, y - sizeD2, 1,
				x - sizeD2, y - size, 1,

				x + size / 3, y - sizeD2, 1,
				x + size / 3, y - size, 1,
				x - sizeD2, y - size, 1,

				x + sizeD4, y + size / 3, 1,
				x - sizeD2, y + size / 3, 1,
				x - sizeD2, y + sizeD2, 1,

				x + sizeD4, y + size / 3, 1,
				x + sizeD4, y + sizeD2, 1,
				x - sizeD2, y + sizeD2, 1,
			];
		};

		this.AColors = [

			0,0,0,1,
			0,0,0,1,
			0,0,0,1,

			0,0,0,1,
			0,0,0,1,
			0,0,0,1,

			255,255,255,1,
			255,255,255,1,
			255,255,255,1,

			255,255,255,1,
			255,255,255,1,
			255,255,255,1,

			255,255,255,1,
			255,255,255,1,
			255,255,255,1,

			255,255,255,1,
			255,255,255,1,
			255,255,255,1,

		];

		this.getLetterB = function(x, y) {
			return [
				x + size, y + size, 1,
				x - size, y + size, 1,
				x - size, y - size, 1,

				x + size, y + size, 1,
				x + size, y - size, 1,
				x - size, y - size, 1,

				// x + sizeD4, y - sizeM5, 1,
				// x + size * 2, y - sizeM5, 1,
				// x + sizeD4, y - size * 4, 1,

				// x + sizeD4, y - size * 4, 1,
				// x + size * 2, y - size * 4, 1,
				// x + size * 2, y - sizeM5, 1,

				// x + sizeD4, y, 1,
				// x + size * 2, y, 1,
				// x + sizeD4, y + size, 1,

				// x + sizeD4, y + size, 1,
				// x + size * 2, y, 1,
				// x + size * 2, y + size, 1,
			];
		};

		this.BColors = [
			0,0,0,1,
			0,0,0,1,
			0,0,0,1,

			0,0,0,1,
			0,0,0,1,
			0,0,0,1,

			// 0,0,0,1,
			// 0,0,0,1,
			// 0,0,0,1,

			// 0,0,0,1,
			// 0,0,0,1,
			// 0,0,0,1,

			// 0,0,0,1,
			// 0,0,0,1,
			// 0,0,0,1,

			// 0,0,0,1,
			// 0,0,0,1,
			// 0,0,0,1,
		];

		this.colors = this.convertColors(this.LColors.concat(this.AColors.concat(this.BColors)));
	}
}

LabEntity.prototype.getArrays = function(x, y) {
	var size = 10;
	var positions = this.getLetterL(x - 30, y).concat(this.getLetterA(x, y).concat(this.getLetterB(x + 50, y)));
	// var colors = this.LColors.concat(this.AColors.concat(this.getLetterBColors()));
	return  {
	   position: this.absoluteToRelative(positions),
	   color: this.colors
	};
};

LabEntity.prototype.draw = function() {
	function _draw(time) {
		this.position.y-=2;
		this.display(time);
	    requestAnimationFrame(_draw.bind(this));
	}

	requestAnimationFrame(_draw.bind(this));
};