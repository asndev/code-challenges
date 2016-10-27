function simpleSymbols(input) {
    function isLetter(char) { return char.toUpperCase() != char.toLowerCase();}
    var isValid = 'true';
    input.split('').forEach(function(char, i) {
        if (!isLetter(char)) {
            return;
        }
        if (input.charAt(i - 1) !== '+' || input.charAt(i + 1) !== '+') {
            isValid = 'false';
        }
    });
    return isValid;
}


var test = require('../tester');
test(simpleSymbols, 'true','+d+=3=+s+')();
test(simpleSymbols, 'false', 'f++d+')();
