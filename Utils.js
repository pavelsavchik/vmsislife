class Utils {
  static resize() {
    var canvas = twgl.getWebGLContext($("#glcanvas")[0]).canvas;
    // Lookup the size the browser is displaying the canvas.
    var displayWidth  = canvas.clientWidth;
    var displayHeight = canvas.clientHeight;

    // Check if the canvas is not the same size.
    if (canvas.width  != displayWidth ||
        canvas.height != displayHeight) {
   
      // Make the canvas the same size
      canvas.width  = displayWidth;
      canvas.height = displayHeight;
    }
  }

  static mapColor(number, index, array, fromMin = 0, fromMax = 256, toMin = 0, toMax = 1) {
    return (index + 1) % 4 === 0 ? number : (number - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
  }

  static convertColors(array) {
    return array.map(Utils.mapColor);
  }
}