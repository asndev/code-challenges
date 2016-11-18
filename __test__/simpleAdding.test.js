const simpleAdding = (num) => {
  let result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
}

test('Adding Test', () => {
  expect(simpleAdding(12)).toBe(78);
  expect(simpleAdding(140)).toBe(9870);
});
