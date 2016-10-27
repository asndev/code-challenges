const simpleAdding = (num) => {
  let result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
}

import test from 'ava';

test('Adding Test', t => {
  t.is(simpleAdding(12), 78);
  t.is(simpleAdding(140), 9870);
});
