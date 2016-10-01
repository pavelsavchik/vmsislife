window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

var Key = {
  _pressed: {},
  _upped: {},

  A: 65,
  W: 87,
  D: 68,
  S: 83,
  SPACE: 32,
  
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },

  //remove after read
  isUp : function(keyCode) {
    var value = this._upped[keyCode];
    delete this._upped[keyCode];
    return value;
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    this._upped[event.keyCode] = true;
    delete this._pressed[event.keyCode];
  }
};


