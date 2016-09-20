class LabEntity extends BaseEntity {
	constructor(position, text) {
		super(position);
		var size = 10,
			sizeD4 = size / 4,
			sizeM5 = size * 5;
		this.getLetterL = function(x, y) {
			return [
				x - sizeD4, y - sizeM5, 1,
				x - sizeD4, y + size, 1,
				x + sizeD4, y + size, 1,

				x - sizeD4, y - sizeM5, 1,
				x + sizeD4, y - sizeM5, 1,
				x + sizeD4, y + size, 1,

				x + sizeD4, y - sizeM5, 1,
				x + size * 2, y - sizeM5, 1,
				x + sizeD4, y - size * 4, 1,

				x + sizeD4, y - size * 4, 1,
				x + size * 2, y - size * 4, 1,
				x + size * 2, y - sizeM5, 1,
				
			];
		};

		this.getLetterA = function(x, y) {
			return [
				x, y - size * 2, 1,
				x, y + size, 1,
				x - size, y - size * 5, 1,

				x, y - size * 2, 1,
				x, y + size, 1,
				x + size, y - size * 5, 1,

				x - size, y - size * 3, 1,
				x - size, y - size * 4, 1,
				x + size, y - size * 4, 1,

				x - size, y - size * 3, 1,
				x + size, y - size * 4, 1,
				x + size, y - size * 3, 1,
			];
		};

		this.getLetterB = function(x, y) {
			return [
				x - sizeD4, y - sizeM5, 1,
				x - sizeD4, y + size, 1,
				x + sizeD4, y + size, 1,

				x - sizeD4, y - sizeM5, 1,
				x + sizeD4, y - sizeM5, 1,
				x + sizeD4, y + size, 1,

				x + sizeD4, y - sizeM5, 1,
				x + size * 2, y - sizeM5, 1,
				x + sizeD4, y - size * 4, 1,

				x + sizeD4, y - size * 4, 1,
				x + size * 2, y - size * 4, 1,
				x + size * 2, y - sizeM5, 1,

				x + sizeD4, y, 1,
				x + size * 2, y, 1,
				x + sizeD4, y + size, 1,

				x + sizeD4, y + size, 1,
				x + size * 2, y, 1,
				x + size * 2, y + size, 1,
			];
		};
	}
}

LabEntity.prototype.getArrays = function(x, y) {
	var size = 10;
	var positions = this.getLetterL(x - 35, y).concat(this.getLetterA(x, y).concat(this.getLetterB(x + 20, y)));
	return  {
	   position: this.absoluteToRelative(positions),
	   // color: []
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