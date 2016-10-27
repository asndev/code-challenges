const longestWord = (sen) => {
  let longestString = '';
  let currenstString = '';

  const isLetter = (char) => {
    return char.toUpperCase() != char.toLowerCase();
  }

  sen.split('').forEach(char => {
    if (isLetter(char)) {
      currenstString += char;

      if (currenstString.length > longestString.length) {
        longestString = currenstString;
      }
    } else {
      currenstString = '';
    }
  });

  return longestString;
}


import test from 'ava';

test('Letter Capitalization Test', t => {
  t.is(longestWord('fun&!! time'), 'time');
  t.is(longestWord('I love dogs'), 'love');
});
