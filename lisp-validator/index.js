const assert = require('assert');

const lispValidator = (str) => {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) == '(') {
			stack.push('(');
		} else if (str.charAt(i) == ')') {
			stack.pop();
		}
	}
	return stack.length == 0;
};

assert.equal(lispValidator('(())'), true);
assert.equal(lispValidator('(()('), false);
