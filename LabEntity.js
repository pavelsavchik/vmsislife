class LabEntity extends BaseEntity {
    constructor(position, text) {
        super(position);
        var size = 15,
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

        this.LColors = [
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
        ];

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

        this.AColors = [

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

        ];

        //fuck this letter
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

        this.BColors = [
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

LabEntity.prototype.getArrays = function (x, y) {
    var size = 15;
    var positions = this.getLetterL(x - size * 2, y).concat(this.getLetterA(x, y).concat(this.getLetterB(x + size * 2, y)));
    // var colors = this.LColors.concat(this.AColors.concat(this.getLetterBColors()));
    return {
        position: this.absoluteToRelative(positions),
        // position: (positions),
        color: this.colors
    };
};

LabEntity.prototype.draw = function () {
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