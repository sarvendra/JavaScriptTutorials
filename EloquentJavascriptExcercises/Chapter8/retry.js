function MultiplicatorUnitFailure() {}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  for(;;) {
    try {
        return primitiveMultiply(a, b);
    } catch(error) {
        if (error instanceof MultiplicatorUnitFailure) {
            console.log("error " + error);
        }
        else {
            throw error;
        }
    }
  }
}