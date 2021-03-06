module.exports = function (GameboyJS) {
  "use strict";

  // Keyboard listener
  // Does the mapping between the keyboard and the Input class
  var Keyboard = function() {};

  // Initialize the keyboard listeners and set up the callbacks
  // for button press / release
  Keyboard.prototype.init = function(onPress, onRelease) {
    this.onPress = onPress;
    this.onRelease = onRelease;

    var self = this;
    document.addEventListener('keydown', function(e) {
      self.managePress(e.keyCode);
    });
    document.addEventListener('keyup', function(e) {
      self.manageRelease(e.keyCode);
    });
    document.addEventListener('touchstart', function(e) {
      self.managePress(e.target.id);
    });
    document.addEventListener('touchend', function(e) {
      self.manageRelease(e.target.id);
    });
  }

  Keyboard.prototype.managePress = function(keycode) {
    var key = this.translateKey(keycode);
    if (key) {
      this.onPress(key);
    }
  };

  Keyboard.prototype.manageRelease = function(keycode) {
    var key = this.translateKey(keycode);
    if (key) {
      this.onRelease(key);
    }
  };

  // Transform a keyboard keycode into a key of the Input.keys object
  Keyboard.prototype.translateKey = function(keycode) {
    var key = null;
    switch (keycode) {
      case 'A':
      case 71: // G
        key = 'A';
        break;
      case 'B':
      case 66: // B
        key = 'B';
        break;
      case 'start':
      case 72: // H
        key = 'START';
        break;
      case 'select':
      case 78: // N
        key = 'SELECT';
        break;
      case 'left':
      case 37: // left
        key = 'LEFT';
        break;
      case 'up':
      case 38: // up
        key = 'UP';
        break;
      case 'right':
      case 39: // right
        key = 'RIGHT';
        break;
      case 'down':
      case 40: // down
        key = 'DOWN';
        break;
    }

    return key;
  };
  return Keyboard;
}
