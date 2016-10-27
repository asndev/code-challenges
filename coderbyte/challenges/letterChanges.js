function letterChanges(str) {
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var vovels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').map(function (char) {
    var charIndex = letters.indexOf(char.toLowerCase());
    if (charIndex !== -1) {
      var index = charIndex === 25 ? 0 : charIndex + 1;
      char = letters[index];
    }

    return char;
  }).map(function (char) {
    if (vovels.indexOf(char.toLowerCase()) !== -1) {
      return char.toUpperCase();
    }

    return char;
  }).join('');
}

var test = require('../tester');
test(letterChanges, 'Ifmmp*3', 'hello*3')();
