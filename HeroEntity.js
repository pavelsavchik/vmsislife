class HeroEntity extends BaseEntity {
    constructor(position, text) {
        super(position);
        
        this.left = () =>  position.x += position.step;
        this.right = () => position.x -= position.step ;
        this.down = () => position.y -= position.step;
        this.top = () => position.y += position.step;
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