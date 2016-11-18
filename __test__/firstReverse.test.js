const firstReverse = (str) => {
  return str.split('').reverse().join(''); 
}

test('Check Nums Test', () => {
  expect(firstReverse('edoC evoL I')).toBe('I Love Code');
});
