function firstReverse(str) {
  return str.split('').reverse().join(''); 
}

var test = require('../tester');
test(firstReverse, 'edoC evoL I', 'I Love Code')();
