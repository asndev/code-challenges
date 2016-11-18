const firstFactorial = (num) => {
  var sum = num;

  while (--num > 0) {
    sum *= num;
  }
  return sum;
}

test('Check Nums Test', () => {
  expect(firstFactorial(4)).toBe(24);
});
