function test(testedFunction, expectedValue) {
  return (testDescription = testedFunction.name) => {
    const functionArgs = [];
    for (var i = 2, len = arguments.length; i < len; i++) {
      functionArgs.push(arguments[i]);
    }

    const result = testedFunction.apply(null, functionArgs);
    const isSame = result === expectedValue;

    if (isSame) {
      console.log('\033[92m ✔ \x1b[0m' + testDescription);
    } else {
      console.log('\033[91m ✖ \x1b[0m' + testDescription);
      console.log(' expected: \033[92m' + expectedValue + '\x1b[0m');
      console.log(' actual:   \033[91m' + result + '\x1b[0m');
    }

    return isSame;
  }
};

module.exports = test;