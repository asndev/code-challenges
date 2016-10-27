const firstReverse = (str) => {
  return str.split('').reverse().join(''); 
}

import test from 'ava';

test('Check Nums Test', t => {
  t.is(firstReverse('edoC evoL I'), 'I Love Code');
});
