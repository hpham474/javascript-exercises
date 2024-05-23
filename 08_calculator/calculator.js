const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((accumulator, current) => {
    return accumulator * current;
  }, 1)
};

const power = function(a, b) {
  /*
	let total = 1;
  for (let i = 0; i < b; i++) {
    total *= a;
  }

  return total;
  */

  return Math.pow(a, b);
};

const factorial = function(a) {
  /*
	arr = [];
  for (let i = 1; i <= a; i++) {
    arr[i] = i;
  }

  factor = arr.reduce((accumulator, total) => {
    return accumulator * total;
  }, 1);

  return factor;
  */

  let product = 1;
  for (let i = 1; i <= a; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
