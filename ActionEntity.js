class ActionEntity extends BaseEntity {
	constructor(position) {
		super(position);


		this.animate = function(coordinate, step, n = 5) {
			var currentStep = step * n;
			if (this.isInBorder(position[coordinate] + currentStep)) {
				position[coordinate] += currentStep;
				if (n > 0) {
					setTimeout(this.animate.bind(this), 30, coordinate, step, n - 1);
				}
			}			
		}

		this.left = () => this.animate("x", position.step);
		this.right = () => this.animate("x", - position.step);
		this.down = () => this.animate("y", - position.step);
		this.top = () => this.animate("y", position.step);
	}
};