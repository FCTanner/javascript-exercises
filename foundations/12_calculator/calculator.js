const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (x) {
  const sum = x.reduce((acc, val) => acc + val, 0);
  return sum;
};

const multiply = function (x) {
  const prod = x.reduce((acc, val) => acc * val, 1);
  return prod;
};

const power = function (base, exp) {
  let power = base;
  for (let i = 1; i < exp; i++) {
    power = power * base;
  }
  return power;
};

const factorial = function (x) {
  if (x === 0) return 1;
  let acc = x;
  for (let i = x - 1; i > 0; i--) {
    acc = acc * i;
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
