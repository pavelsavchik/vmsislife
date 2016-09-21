var heroColors = {
    colors : [
        153, 51, 51, 1,
        153, 51, 51, 1,
        153, 51, 51, 1,

        153, 51, 51, 1,
        153, 51, 51, 1,
        153, 51, 51, 1,

        255, 255, 102, 1,
        255, 255, 102, 1,
        255, 255, 102, 1,

        255, 255, 102, 1,
        255, 255, 102, 1,
        255, 255, 102, 1,

        153, 51, 51, 1,
        153, 51, 51, 1,
        153, 51, 51, 1,

        153, 51, 51, 1,
        153, 51, 51, 1,
        153, 51, 51, 1,

        255, 153, 51, 1,
        255, 153, 51, 1,
        255, 153, 51, 1,

        255, 153, 51, 1,
        255, 153, 51, 1,
        255, 153, 51, 1,

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

        51, 102, 153, 1,
        51, 102, 153, 1,
        51, 102, 153, 1,


        51, 102, 153, 1,
        51, 102, 153, 1,
        51, 102, 153, 1,

        255, 255, 255, 1,
        255, 255, 255, 1,
        255, 255, 255, 1,
    ]
}

class HeroEntity extends ActionEntity {
    constructor(position) {
        super(position);
        
        this.fire = function() {
            var answer = new AnswerEntity( { x : this.position.x, y : this.position.y + 25} );
            answer.draw();
            return answer;
        }
    }

}

HeroEntity.prototype.getArrays = function (x, y) {
    var size = 20;
    var positions = this.formHero(x, y);
    return {
        position: this.absoluteToRelative(positions),
        color: this.convertColors(heroColors.colors)
    };
}

HeroEntity.prototype.formHero = function (x, y) {
    var size = 30;
    var sizeD2 = size / 2,
        sizeD4 = size / 4,
        sizeD8 = size / 8,
        sizeM2 = size * 2;

    return [
        //body square
        x + sizeD2, y + size, 1,
        x - sizeD2, y + size, 1,
        x - sizeD2, y - sizeD2, 1,

        x + sizeD2, y + size, 1,
        x + sizeD2, y - sizeD2, 1,
        x - sizeD2, y - sizeD2, 1,

        //'S' letter
        x + sizeD4, y + sizeD2 + sizeD4, 1,
        x - sizeD4, y + sizeD2 + sizeD4, 1,
        x - sizeD4, y, 1,

        x + sizeD4, y + sizeD2 + sizeD4, 1,
        x + sizeD4, y , 1,
        x - sizeD4, y, 1,

        x + sizeD4, y + sizeD2 + sizeD8, 1,
        x, y + sizeD2, 1,
        x + sizeD4, y + sizeD2 - sizeD8, 1,

        x - sizeD4, y + sizeD4 + sizeD8, 1,
        x, y + sizeD4, 1,
        x - sizeD4, y + sizeD8, 1,

        //head square
        x + sizeD2, y + sizeM2, 1,
        x - sizeD2, y + sizeM2, 1,
        x - sizeD2, y + size, 1,

        x + sizeD2, y + sizeM2, 1,
        x + sizeD2, y + size, 1,
        x - sizeD2, y + size, 1,

        x + sizeD2, y + sizeM2, 1,
        x + sizeD4, y + sizeM2, 1,
        x + sizeD2, y + sizeM2 - sizeD4, 1,

        x - sizeD4, y + sizeM2, 1,
        x - sizeD2, y + sizeM2, 1,
        x - sizeD2, y + sizeM2 - sizeD4, 1,

        //upper triangles
        x + sizeD2, y + size + sizeD4, 1,
        x + sizeD4, y + size, 1,
        x + sizeD2, y + size - sizeD4, 1,

        x - sizeD2, y + size + sizeD4, 1,
        x - sizeD4, y + size, 1,
        x - sizeD2, y + size - sizeD4, 1,

        //foots
        x + sizeD2, y - sizeD2, 1,
        x - sizeD2, y - sizeD2, 1,
        x - sizeD2, y - sizeD2 - size, 1,

        x + sizeD2, y - sizeD2, 1,
        x + sizeD2, y - sizeD2 - size, 1,
        x - sizeD2, y - sizeD2 - size, 1,

        x + sizeD4, y - sizeD2 - size, 1,
        x - sizeD4, y - sizeD2 - size, 1,
        x, y - sizeD2 - sizeD4, 1,
    ];
}