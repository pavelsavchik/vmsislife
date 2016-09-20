class ActionEntity extends BaseEntity {
	constructor(position) {
		super(position);

		this.jump = function() {
			var n = 21;
			if (!this.inJump) {
				this.inJump = true;
				(function _jump() {
					n > 10 ? this.top() : this.down();
					this.left();
					if (n-- > 0) {
						setTimeout(_jump.bind(this), 5);
					} else {
						this.inJump = false;
					}
				}.bind(this))();
			}
		};

		this.left = () => this.isInBorder(position.x + position.step) ? position.x += position.step : false;
		this.right = () => this.isInBorder(position.x - position.step) ? position.x -= position.step : false;
		this.down = () => this.isInBorder(position.y - position.step) ? position.y -= position.step : false;
		this.top = () => this.isInBorder(position.y + position.step) ? position.y += position.step : false;
	}
}

ActionEntity.prototype.getArrays = function(x, y) {
	var size = 0.1
	return {
		position : [	
			x - .0, y, 1,
			x - .0, y + size, 0,
			x + size / 2, y, 0,

			x + size / 2, y, 1,
			x + size / 2, y + size, 0,
			x, y + size, 0
		],
		color : [0.234,0.6,0.13,1, 255,255,255,1]
	};
}