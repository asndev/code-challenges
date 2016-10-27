const checkNums = (a, b) => {
  if (a < b) {return 'true'}
  if (a > b) {return 'false';}
  return '-1';
}

import test from 'ava';

test('Check Nums Test', t => {
  t.is(checkNums(3, 122), 'true', 'Expected 3 to be smaller than 122');
  t.is(checkNums(5, 5), '-1', 'Expected 5 to be equal to 5');
  t.is(checkNums(10, 5), 'false', 'Expected 10 to be larger than 5');
});
