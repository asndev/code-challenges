function simpleAdding(num) {
  var result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
}

var test = require('../tester');
test(simpleAdding, 78, 12)();
test(simpleAdding, 9870, 140)();
