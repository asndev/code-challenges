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

test('Letter Capitalization Test', () => {
  expect(longestWord('fun&!! time')).toBe('time');
  expect(longestWord('I love dogs')).toBe('love');
});
