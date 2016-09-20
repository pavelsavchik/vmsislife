class EarthEntity extends BaseEntity {
	constructor(position, text) {
		super(position);
		var size = 10;
	}
}

EarthEntity.prototype.getArrays = function(x, y) {
	var positions = this.formEarth(x - 20, y);
	return  {
	   position: this.absoluteToRelative(positions)
	};
}

EarthEntity.prototype.formEarth = function(x, y) {
	return [
				0, 0, 1,
				0, this.maxY / 10, 1,
				this.maxY , this.maxY / 10, 1,

				0, 0, 1,
				this.maxY, 0, 1,
				this.maxY , this.maxY / 10, 1,
			
	];		
}