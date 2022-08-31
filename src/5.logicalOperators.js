// use the logical operator not if statements

// or: should return true if either a or b are truthy. False, if both are false
function or(a, b) {
  if (a == !false || b == !false) {
    return true;
  } else if (a == !true && b == !true) {
    return false;
  }
  return;
}

//and: should return true only if both a and b are truthy
function and(a, b) {
  return;
}

module.exports = {
  or,
  and,
};
