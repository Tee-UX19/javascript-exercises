const add = function(num1,num2) {
  return num1 + num2;
	
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product;
  if (array.length === 0) {
    return 0;
  }

  product = array[0];
  for (let i = 1; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};


const power = function(num1,num2) {
  return Math.pow(num1,num2);
	
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
	
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
