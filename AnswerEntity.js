var answerColors = {
	colors : (function() {
		return Utils.convertColors([
			   		0,255,0,1,
			   		0,255,0,1,
			   		0,255,0,1,

			   		0,255,0,1,
			   		0,255,0,1,
			   		0,255,0,1,
			   	])
	})()
}

class AnswerEntity extends BaseEntity {
	constructor(position) {
		super(position);
		var size = this.size = 10;
		this.getPositions = function(x, y) {
			return [
				x + size, y + size, 1,
				x - size, y + size, 1,
				x - size, y - size, 1,

				x + size, y + size, 1,
				x + size, y - size, 1,
				x - size, y - size, 1,
			];
		};

		this.valid = true;
	}
}

AnswerEntity.prototype.getArrays = function(x, y) {
	var positions = this.getPositions(x, y);
	return  {
	   position: this.absoluteToRelative(positions),
	   color : answerColors.colors
	};
}

AnswerEntity.prototype.draw = function() {
	function _draw(time) {
		this.position.y += 5;
		this.display(time);
		if (this.valid && this.position.y < this.maxY) {
	    	requestAnimationFrame(_draw.bind(this));
		} else {
			this.valid = false;
		}
	}

	requestAnimationFrame(_draw.bind(this));
};

AnswerEntity.prototype.getVShader = () => "vs-answer";
AnswerEntity.prototype.getFShader = () => "fs-answer";