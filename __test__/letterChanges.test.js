const letterChanges = (str) => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const vovels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').map(char => {
    const charIndex = letters.indexOf(char.toLowerCase());
    if (charIndex !== -1) {
      const index = charIndex === 25 ? 0 : charIndex + 1;
      char = letters[index];
    }

    return char;
  }).map(char => {
    if (vovels.indexOf(char.toLowerCase()) !== -1) {
      return char.toUpperCase();
    }

    return char;
  }).join('');
}


test('Letter Changes Test', () => {
  expect(letterChanges('hello*3')).toBe('Ifmmp*3');
});

