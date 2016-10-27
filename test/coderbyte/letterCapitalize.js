const letterCapitalize = (input) => {
  return input.split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

import test from 'ava';

test('Letter Capitalization Test', t => {
  t.is(letterCapitalize('hello world'), 'Hello World');
  t.is(letterCapitalize('i ran there'), 'I Ran There');
});
