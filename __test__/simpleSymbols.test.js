const simpleSymbols = (input) => {
    const isLetter = char => { return char.toUpperCase() != char.toLowerCase();}
    let isValid = 'true';
    input.split('').forEach((char, i) => {
        if (!isLetter(char)) {
            return;
        }
        if (input.charAt(i - 1) !== '+' || input.charAt(i + 1) !== '+') {
            isValid = 'false';
        }
    });
    return isValid;
}

test('Simple Symbols Test', () => {
  expect(simpleSymbols('+d+=3=+s+')).toBe('true');
  expect(simpleSymbols('f++d+')).toBe('false');
});
