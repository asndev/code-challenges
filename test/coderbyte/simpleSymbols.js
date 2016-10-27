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

import test from 'ava';

test('Simple Symbols Test', t => {
  t.is(simpleSymbols('+d+=3=+s+'), 'true');
  t.is(simpleSymbols('f++d+'), 'false');
});
