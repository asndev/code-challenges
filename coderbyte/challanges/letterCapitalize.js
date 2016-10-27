function letterCapitalize(input) {
  return input.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

var test = require('../tester');
test(letterCapitalize, 'Hello World', 'hello world')();
test(letterCapitalize, 'I Ran There', 'i ran there')();
