class LabEntity extends BaseEntity {
	constructor(position, text) {
		super(position);
		var size = 15,
			sizeM3D4 = size * .75,
			sizeD2 = size / 2,
			sizeD4 = size / 4,
			sizeD8 = size / 8,
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
				x + sizeD2, y + sizeD2, 1,
				x - size, y + sizeD2, 1,
				x - size, y - size, 1,

				x + sizeD2, y + sizeD2, 1,
				x + sizeD2, y - size, 1,
				x - size, y - size, 1,

				x + sizeD4, y + sizeD2, 1,
				x + sizeD4, y + size, 1,
				x - sizeD2, y + sizeD2, 1,

				x - sizeD2, y + sizeD2, 1,
				x - sizeD2, y + size, 1,
				x + sizeD4, y + size, 1,

				x - sizeD2, y + size, 1,
				x - sizeD2, y + sizeD2, 1,
				x - size, y + sizeD2, 1,

				x + sizeD4, y + size, 1,
				x + sizeD4, y + sizeD2, 1,
				x + sizeD2, y + sizeD2, 1,

				x + sizeD8, y - sizeD2, 1,
				x - sizeD2, y - sizeD2, 1,
				x - sizeD2, y - size, 1,

				x + sizeD8, y - sizeD2, 1,
				x + sizeD8, y - size, 1,
				x - sizeD2, y - size, 1,

				x + sizeD8, y + size / 3, 1,
				x - sizeD2, y + size / 3, 1,
				x - sizeD2, y + sizeD2, 1,

				x + sizeD8, y + size / 3, 1,
				x + sizeD8, y + sizeD2, 1,
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

		//fuck this letter
		this.getLetterB = function(x, y) {
			return [
				x - sizeM3D4, y + size, 1,
				x - size, y + size, 1,
				x - size, y - size, 1,

				x - sizeM3D4, y + size, 1,
				x - sizeM3D4, y - size, 1,
				x - size, y - size, 1,

				x - sizeM3D4, y + size, 1,
				x - sizeM3D4, y + sizeD2, 1,
				x + sizeD2, y + sizeD2, 1,

				x - sizeM3D4, y - size, 1,
				x - sizeM3D4, y - sizeD2, 1,
				x + sizeD2, y - sizeD2, 1,

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
	var positions = this.getLetterL(x - 20, y).concat(this.getLetterA(x, y).concat(this.getLetterB(x + 30, y)));
	// var colors = this.LColors.concat(this.AColors.concat(this.getLetterBColors()));
	return  {
	   position: this.absoluteToRelative(positions),
	   // position: (positions),
	   color: this.colors
	};
};

LabEntity.prototype.draw = function() {
	function _draw(time) {
		this.position.y -= 3;
		this.display(time);
		if (this.position.y > 100) {
	    	requestAnimationFrame(_draw.bind(this));
		}
	}

	requestAnimationFrame(_draw.bind(this));
};


// LabEntity.prototype.getVShader = () => "vs-lab";
// LabEntity.prototype.getFShader = () => "fs-lab";