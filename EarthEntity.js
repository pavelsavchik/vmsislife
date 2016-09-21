class EarthEntity extends BaseEntity {
	constructor(position, text) {
		super(position);
		var size = 10;
	}
}

EarthEntity.prototype.getArrays = function(x, y) {
	var positions = this.formEarth(x - 20, y);
	return  {
	   position: this.absoluteToRelative(positions),
	   color : this.convertColors([

	   		0, 100, 0, 1,
	   		0, 100, 0, 1,
	   		0, 100, 0, 1,

	   		0, 100, 0, 1,
	   		0, 100, 0, 1,
	   		0, 100, 0, 1
	   	])
	};
};

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