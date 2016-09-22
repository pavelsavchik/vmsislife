var Deadline = {

    LColors: Utils.convertColors([
        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,
    ]),

    DColors: Utils.convertColors([
        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,
    ]),

    EColors: Utils.convertColors([
        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,
    ]),

    NColors: Utils.convertColors([
        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,
    ]),

    IColors: Utils.convertColors([
        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,
    ]),

    AColors: Utils.convertColors([

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,


        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,


        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,


        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,


        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

    ]),

    BColors: Utils.convertColors([
        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        255, 0, 0, 1,
        255, 0, 0, 1,
        255, 0, 0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,


        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,

        0,0,0, 1,
        0,0,0, 1,
        0,0,0, 1,
    ])
};

class DeadlineEntity extends BaseEntity {
    constructor(position, answers) {
        super(position);

        var size = this.size = 20,
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

        this.getLetterD = function (x, y) {
            return [
                x + sizeD2, y + size, 1,
                x - size, y + size, 1,
                x - size, y - size, 1,

                x + sizeD2, y + size, 1,
                x + sizeD2, y - size, 1,
                x - size, y - size, 1,

                //Central square
                x, y + sizeD4, 1,
                x - sizeD2, y + sizeD4, 1,
                x - sizeD2, y - sizeD4, 1,

                x, y + sizeD4, 1,
                x, y - sizeD4, 1,
                x - sizeD2, y - sizeD4, 1,

                //Upper triangle
                x + sizeD2, y + size, 1,
                x, y + size, 1,
                x + sizeD2, y + sizeD2, 1,

                //Bottom triangle
                x + sizeD2, y - sizeD2, 1,
                x, y - size, 1,
                x + sizeD2, y - size, 1,


            ];
        };

        this.getLetterE = function (x, y) {
            return [
                x + sizeD2, y + size, 1,
                x - size, y + size, 1,
                x - size, y - size, 1,

                x + sizeD2, y + size, 1,
                x + sizeD2, y - size, 1,
                x - size, y - size, 1,

                //Upper hole
                x + sizeD2, y + sizeD2, 1,
                x - sizeD2, y + sizeD2, 1,
                x - sizeD2, y + sizeD4, 1,

                x + sizeD2, y + sizeD2, 1,
                x + sizeD2, y + sizeD4, 1,
                x - sizeD2, y + sizeD4, 1,

                //Bottom hole
                x + sizeD2, y - sizeD4, 1,
                x - sizeD2, y - sizeD4, 1,
                x - sizeD2, y - sizeD2, 1,

                x + sizeD2, y - sizeD4, 1,
                x + sizeD2, y - sizeD2, 1,
                x - sizeD2, y - sizeD2, 1,
            ];
        };

        this.getLetterN = function (x, y) {
            return [
                x + sizeD2, y + size, 1,
                x - size, y + size, 1,
                x - size, y - size, 1,

                x + sizeD2, y + size, 1,
                x + sizeD2, y - size, 1,
                x - size, y - size, 1,

                //Upper hole
                x, y + size, 1,
                x - sizeD2, y + size, 1,
                x, y, 1,

                x - sizeD2, y, 1,
                x - sizeD2, y - size, 1,
                x, y - size, 1,
            ];
        };

        this.getLetterI = function (x, y) {
            return [
                x, y + size, 1,
                x - sizeD4 - sizeD2, y + size, 1,
                x - sizeD4 - sizeD2, y - size, 1,

                x, y + size, 1,
                x, y - size, 1,
                x - sizeD4 - sizeD2, y - size, 1,
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

        this.getPositions = function (x, y) {
            var positions = this.getLetterD(x - size * 7, y)
                .concat(this.getLetterE(x - size * 5, y))
                .concat(this.getLetterA(x - size * 3, y))
                .concat(this.getLetterD(x - size, y))
                .concat(this.getLetterL(x + size, y))
                .concat(this.getLetterI(x + size * 3, y))
                .concat(this.getLetterN(x + size * 5, y))
                .concat(this.getLetterE(x + size * 7, y))

            //    .concat(this.getLetterA(x, y));
            //
            //positions = positions.concat(this.getLetterA(x, y));
            //
            //positions = positions.concat(this.getLetterB(x + size * 2, y));

            return this.absoluteToRelative(positions)
        }

        this.getColors = function () {
            var colors = Deadline.DColors
                .concat(Deadline.EColors)
                .concat(Deadline.AColors)
                .concat(Deadline.DColors)
                .concat(Deadline.LColors)
                .concat(Deadline.IColors)
                .concat(Deadline.NColors)
                .concat(Deadline.EColors)

            return colors;
        }
    }
}

DeadlineEntity.prototype.getArrays = function (x, y) {
    return {
        position: this.getPositions(x, y),
        color: this.getColors()
    };
};

//DeadlineEntity.prototype.draw = function () {
//
//
//
//    function _draw(time) {
//        this.position.y -= 1;
//        if (this.position.y > 100 && (this.renderC || this.renderB || this.renderA)) {
//            requestAnimationFrame(_draw.bind(this));
//        }
//    }
//
//    requestAnimationFrame(_draw.bind(this));
//};
