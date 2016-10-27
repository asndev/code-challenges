function longestWord(sen) {
  var longestString = '';
  var currenstString = '';

  function isLetter(char) {
    return char.toUpperCase() != char.toLowerCase();
  }

  sen.split('').forEach(function(char) {
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

var test = require('../tester');
test(longestWord, 'time', 'fun&!! time')();
test(longestWord, 'love', 'I love dogs')();
