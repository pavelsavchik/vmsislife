class HeroEntity extends ActionEntity {
    constructor(position) {
        super(position);
        
        this.fire = function() {
            var vedoma = new VedomaEntity( { x : this.position.x, y : this.position.y} );
            vedoma.draw();
        }
    }    
    
}

HeroEntity.prototype.getArrays = function(x, y) {
    var size = 20;
    var positions = this.formHero(x, y);
    return  {
        position: this.absoluteToRelative(positions),
        color : this.convertColors([
                100, 0, 0, 1,
                100, 0, 0, 1,
                100, 0, 0, 1,
            ])
    };
}

HeroEntity.prototype.formHero = function(x, y) {
    return [
        x + 20, y + 20, 1,
        x, y - 20, 1,
        x - 20, y + 20, 1
    ];
}