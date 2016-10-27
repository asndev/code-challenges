function firstFactorial(num) {
  var sum = num;

  while (--num > 0) {
    sum *= num;
  }
  return sum;
}

var test = require('../tester');
test(firstFactorial, 24, 4)();
