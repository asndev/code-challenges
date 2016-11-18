const letterCapitalize = (input) => {
  return input.split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}


test('Letter Capitalization Test', () => {
  expect(letterCapitalize('hello world')).toBe('Hello World');
  expect(letterCapitalize('i ran there')).toBe('I Ran There');
});
