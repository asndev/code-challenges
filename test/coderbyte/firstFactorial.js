const firstFactorial = (num) => {
  let sum = num;

  while (--num > 0) {
    sum *= num;
  }
  return sum;
}

import test from 'ava';

test('Check Nums Test', t => {
  t.is(firstFactorial(4), 24, 'Expected first factorial');
});
