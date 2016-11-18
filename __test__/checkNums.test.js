const checkNums = (a, b) => {
  if (a < b) {return 'true'}
  if (a > b) {return 'false';}
  return '-1';
}

test('Expected 3 to be smaller than 122', () => {
  expect(checkNums(3, 122)).toBe('true');
});

test('Expected 5 to be equal to 5', () => {
  expect(checkNums(5, 5)).toBe('-1');
});

test('Expected 10 to be larger than 5', () => {
  expect(checkNums(10, 5)).toBe('false');
});
