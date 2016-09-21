var labColors = {
	
	LColors : Utils.convertColors([
        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,

        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,

        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,

        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,
    ]),

    AColors : Utils.convertColors([

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,


        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,


        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,


        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,


        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,

    ]),

    BColors : Utils.convertColors([
        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,

        0, 0, 0, 1,
        0, 0, 0, 1,
        0, 0, 0, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,


        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,
    ])
};

class LabEntity extends BaseEntity {
    constructor(position, answers) {
        super(position);

        this.answers = answers;

        var size = this.size = 15,
            sizeM3D4 = size * .75,
            sizeD2 = size / 2,
            sizeD4 = size / 4,
            sizeD8 = size / 8,
            sizeM5 = size * 5;
        this.getLetterL = function (x, y) {
            return [
                x - sizeD2, y + size, 1,
                x - size, y + size, 1,
                x - size, y - size, 1,

                x - sizeD2, y + size, 1,
                x - sizeD2, y - size, 1,
                x - size, y - size, 1,

                x - size, y - sizeD2, 1,
                x - size, y - size, 1,
                x + sizeD2, y - size, 1,

                x - size, y - sizeD2, 1,
                x + sizeD2, y - sizeD2, 1,
                x + sizeD2, y - size, 1,

            ];
        };       

        this.getLetterA = function (x, y) {
            return [
                x + sizeD2, y + size, 1,
                x - size, y + size, 1,
                x - size, y - size, 1,

                x + sizeD2, y + size, 1,
                x + sizeD2, y - size, 1,
                x - size, y - size, 1,

                //Outer upper left triangle
                x - sizeD2, y + size, 1,
                x - size, y + size, 1,
                x - size, y + sizeD2, 1,

                //Outer upper right triangle
                x + sizeD2, y + size, 1,
                x + sizeD2, y + sizeD2, 1,
                x, y + size, 1,

                //Inner bottom square
                x, y - sizeD2, 1,
                x - sizeD2, y - sizeD2, 1,
                x - sizeD2, y - size, 1,

                x, y - sizeD2, 1,
                x, y - size, 1,
                x - sizeD2, y - size, 1,

                //Inner center square
                x, y + sizeD2, 1,
                x - sizeD2, y + sizeD2, 1,
                x - sizeD2, y, 1,

                x, y + sizeD2, 1,
                x, y, 1,
                x - sizeD2, y, 1,

            ];
        };
     
        this.getLetterB = function (x, y) {
            return [
                x - size, y - size, 1,
                x - size, y + size, 1,
                x + sizeD2, y + size, 1,

                x - size, y - size, 1,
                x + sizeD2, y - size, 1,
                x + sizeD2, y + size, 1,

                //upper outer triangle (white)
                x + sizeD2, y + size, 1,
                x + sizeD2 - sizeD4, y + size, 1,
                x + sizeD2, y + size - sizeD4, 1,

                //middle outer triangle (white)
                x + sizeD2, y + sizeD4, 1,
                x + sizeD2, y - sizeD4, 1,
                x + sizeD4, y, 1,

                //bottom outer triangle (white)
                x + sizeD2, y - size, 1,
                x + sizeD2 - sizeD4, y - size, 1,
                x + sizeD2, y - size + sizeD4, 1,

                //top inner square
                x, y + sizeD2 + sizeD4, 1,
                x - sizeD2, y + sizeD2 + sizeD4, 1,
                x - sizeD2, y + sizeD4, 1,

                x, y + sizeD2 + sizeD4, 1,
                x, y + sizeD4, 1,
                x - sizeD2, y + sizeD4, 1,

                //bottom inner square
                x, y - sizeD4, 1,
                x - sizeD2, y - sizeD4, 1,
                x - sizeD2, y - sizeD4 - sizeD2, 1,

                x, y - sizeD4, 1,
                x, y - sizeD4 - sizeD2, 1,
                x - sizeD2, y - sizeD4 - sizeD2, 1,

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

        this.renderA = true;
        this.renderB = true;
        this.renderL = true;

        this.getPositions = function(x, y) {
        	var positions = [];

        	if (this.renderL) {
        		positions = this.getLetterL(x - size * 2, y);
        	}

        	if (this.renderA) {
        		positions = positions.concat(this.getLetterA(x, y));
        	}

        	if (this.renderB) {
        		positions = positions.concat(this.getLetterB(x + size * 2, y));
        	}

        	return this.absoluteToRelative(positions)
        }

        this.getColors = function() {
        	var colors = [];

        	if (this.renderL) {
        		colors = labColors.LColors;
        	}

        	if (this.renderA) {
        		colors = colors.concat(labColors.AColors);
        	}

        	if (this.renderB) {
        		colors = colors.concat(labColors.BColors);
        	}
        	return colors;
        }
    }
}

LabEntity.prototype.getArrays = function (x, y) {
    return {
        position: this.getPositions(x, y),
        color: this.getColors()
    };
};

LabEntity.prototype.draw = function () {

	function checkanswers () {

		for (var i = 0; i < this.answers.length; i++) {
			let answer = this.answers[i];
			if (answer.valid && this.clash(answer.position, this.position, this.size)) {
				answer.valid = false;
			}
			if (!answer.valid) {
				this.answers.splice(i--, 1);
			}
		}
	}

    function _draw(time) {

    	checkanswers.call(this);
        this.position.y -= 1;
        this.display(time);
        if (this.position.y > 100 && (this.renderC || this.renderB || this.renderA)) {
            requestAnimationFrame(_draw.bind(this));
        }
    }

    requestAnimationFrame(_draw.bind(this));
};

LabEntity.prototype.clash = function(answerPos, labPos, labSize) {

	if (this.renderA && Math.abs(answerPos.x - labPos.x) < labSize * 2 && Math.abs(answerPos.y - labPos.y) < labSize * 2) {
		this.renderA = false;
		return true;
	}

	if (this.renderB && Math.abs(answerPos.x - (labPos.x + labSize * 2)) < labSize * 2 && Math.abs(answerPos.y - labPos.y) < labSize * 2) {
		this.renderB = false;
		return true;
	}

	if (this.renderL && Math.abs(answerPos.x - (labPos.x - labSize * 2)) < labSize * 2 && Math.abs(labPos.y - answerPos.y) < labSize * 2) {
		this.renderL = false;
		return true;
	}

	return false;
}; 


// LabEntity.prototype.getVShader = () => "vs-lab";
// LabEntity.prototype.getFShader = () => "fs-lab";