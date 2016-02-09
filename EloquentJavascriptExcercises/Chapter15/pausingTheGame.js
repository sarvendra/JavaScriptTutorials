function runLevel(level, Display, andThen) {
  var gamePause = false;
  var escCode = 27;
  function handler(event) {
    if (event.keyCode === escCode) {
      gamePause = !gamePause;
      event.preventDefault();
    }
  }
  addEventListener("keyup", handler);
  var display = new Display(document.body, level);
  runAnimation(function(step) {
    if (gamePause) {
      return;
    }
    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      display.clear();
      if (andThen)
        andThen(level.status);
      return false;
    }
  });
}

// after modification

function trackKeys(codes) {
  var pressed = Object.create(null);
  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  pressed.register = function() {
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  }

  pressed.unregister = function() {
  removeEventListener("keydown", handler);
  removeEventListener("keyup", handler);
  }
  return pressed;
}

function runLevel(level, Display, andThen) {
  var gamePause = false;
  var escCode = 27;
  function handler(event) {
    if (event.keyCode === escCode) {
      gamePause = !gamePause;
      event.preventDefault();
    }
  }
  addEventListener("keyup", handler);
  var display = new Display(document.body, level);
  arrows.register();
  runAnimation(function(step) {
    if (gamePause) {
      return;
    }
    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      removeEventListener("keyup", handler);
      arrows.unregister();
      display.clear();
      if (andThen)
        andThen(level.status);
      return false;
    }
  });
}