class BaseEntity {
	constructor(position) {
		this.position = position;
		this.position.step = this.position.step || 0.01;
		
		// var vs = "attribute vec4 pos;"+      
	 //        "void main() {"+        
	 //        "gl_Position = pos;"+     
	 //        "}\n";
	 //    var fs = "precision mediump float;"+      
	 //        "void main() {"+        
	 //        "   gl_FragColor = vec4(0, 0, 0, 1);"+     
	 //        "}\n";

	    this.gl = twgl.getWebGLContext($("#glcanvas")[0]);
	    this.maxY = this.gl.canvas.height;
		this.programInfo = twgl.createProgramInfo(this.gl, ["vs-entity", "fs-entity"]);
		this.drawingMethod = this.gl.TRIANGLES;

		this.mapToRange = (number, index, array, fromMin = 0, fromMax = this.gl.canvas.height, toMin = -1, toMax = 1) => 
			(index + 1) % 3 === 0 ? number : (number - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
		this.mapColor = (number, index, array, fromMin = 0, fromMax = 256, toMin = 0, toMax = 1) => 
			(index + 1) % 4 === 0 ? number : (number - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
		this.absoluteToRelative = array => array.map(this.mapToRange);
		this.convertColors = array => array.map(this.mapColor);

		this.display = function(time) {
			var uniforms = {
			      time: time * 0.0001
			};

			var bufferInfo = this.getBufferInfo();

			twgl.resizeCanvasToDisplaySize(this.gl.canvas);
		    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		    this.gl.useProgram(this.programInfo.program);
		    twgl.setUniforms(this.programInfo, uniforms);
		    twgl.setBuffersAndAttributes(this.gl, this.programInfo, bufferInfo);
		    twgl.drawBufferInfo(this.gl, this.drawingMethod, bufferInfo);
		};
	}
};

BaseEntity.prototype.draw = function() {
	function _draw(time) {
		this.display(time);
	    requestAnimationFrame(_draw.bind(this));
	}

	requestAnimationFrame(_draw.bind(this));
};

BaseEntity.prototype.getBufferInfo = function () {
		var x = this.position.x,
			y = this.position.y;
			arrays = this.getArrays(x, y);

		return twgl.createBufferInfoFromArrays(this.gl, arrays);
};

BaseEntity.prototype.getArrays = function(x, y) {
	return {
		position : [
			x - .0, y, 1,
			x - .0, y + 0.5, 0,
			x + .5, y, 0,

			x + .5, y, 1,
			x + .5, y + 0.5, 0,
			x, y + 0.5, 0
		]
	};
};

BaseEntity.prototype.isInBorder = (coordinate) => coordinate <= 1 && coordinate >= -1;