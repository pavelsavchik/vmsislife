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

var studentDirX = 0, studentDirY = 0, studentSpeed = 5;

function playerPaddleMovement()
{
    var isMoves = false;

    var rotationY = 0;
    // move left
    if (Key.isDown(Key.A))
    {
      if (student.position.y < fieldHeight * 0.45)
      {
        rotationY = -90;
        isMoves = true;
        studentDirY = studentSpeed * 0.5;
      }
    }
    // move right
    else if (Key.isDown(Key.D))
    {
      if (student.position.y > -fieldHeight * 0.45)
      {
        rotationY = 90;
        isMoves = true;
        studentDirY = -studentSpeed * 0.5;
      }
    }

    // else don't move
    if(!isMoves)
    {
      studentDirY = 0;
    }
    isMoves = false;

    // move up
    if (Key.isDown(Key.W))
    {
        if (student.position.x < fieldWidth * 0.45)
        {
            rotationY = rotationY === 0 ? 180 : 180 - rotationY / 2;
            isMoves = true;
            studentDirX = studentSpeed * 0.5;
        }
    }
    // move down
    else if (Key.isDown(Key.S))
    {
        if (student.position.x > -fieldWidth * 0.45)
        {
          rotationY = rotationY === 0 ? 0 : rotationY / 2;
          isMoves = true;
          studentDirX = -studentSpeed * 0.5;
        }
    }

    if(!isMoves)
    {
        studentDirX = 0;
    }


    if (Key.isUp(Key.SPACE) && !isWasted)
    {
        createAnswer()
    }

    if (student) {
      student.position.y += studentDirY;
      student.position.x += studentDirX;

      student.rotation.y = rotationY * Math.PI / 180;
    } 
}