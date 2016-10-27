var test = require('./tester');

function functionWithOneParameter(a) { return a + a; }
function functionWithTwoParameters(a, b) { return a + b; }
function functionWithfiveParameters(a, b, c, d, e) { return a + b + c + d + e; }

test(functionWithOneParameter, 4, 2)();
test(functionWithTwoParameters, 10, 3, 7)();
test(functionWithfiveParameters, 'Hello', 'H', 'e', 'l', 'l', 'o')();
test(functionWithOneParameter, 4, 2)('Custom Description');
test(functionWithOneParameter, 2, 2)('Function that fails');
