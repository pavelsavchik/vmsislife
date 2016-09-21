class HeroEntity extends ActionEntity {
    constructor(position) {
        super(position);
        
    }
    
    
}

HeroEntity.prototype.getArrays = function(x, y) {
    var size = 20;
    var positions = this.formHero(x, y);
    return  {
        position: this.absoluteToRelative(positions)
    };
}

HeroEntity.prototype.formHero = function(x, y) {
    return [
        x + 20, y + 20, 1,
        x, y - 20, 1,
        x - 20, y + 20, 1
    ];
}