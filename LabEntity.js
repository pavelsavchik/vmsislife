class LabEntity extends BaseEntity {
	constructor(position, text) {
		super(position);
		var size = 10;
		this.getLetterA = function(x, y) {
			return [
				x - size / 4, y - size * 5, 1,
				x - size / 4, y + size, 1,
				x + size / 4, y + size, 1,

				x - size / 4, y - size * 5, 1,
				x + size / 4, y - size * 5, 1,
				x + size / 4, y + size, 1,

				x + size / 4, y - size * 5, 1,
				x + size, y - size * 5, 1,
				x + size / 4, y - size * 4, 1,

				x + size / 4, y - size * 4, 1,
				x + size, y - size * 4, 1,
				x + size, y - size * 5, 1,
				
			];
		}
	}
}

LabEntity.prototype.getArrays = function(x, y) {
	var size = 10;
	var positions = this.getLetterA(x - 20, y);
	return  {
	   position: this.absoluteToRelative(positions)
	};
}