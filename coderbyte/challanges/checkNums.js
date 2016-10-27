function checkNums(a, b) {
  if (a < b) {return 'true'}
  if (a > b) {return 'false';}
  return '-1';
}

var test = require('../tester');
test(checkNums, 'true', 3, 122)();
test(checkNums, '-1', 5, 5)();
test(checkNums, 'false', 10, 5)();
