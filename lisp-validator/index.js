const assert = require('assert');

/* This function will take in a string and return true or false if the string given
	 has properly nested parenthesis
*/
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

const properString = '(())';
const improperString = '(()(';

// I used the assert node module as an extra check to test the code
assert.equal(lispValidator(properString), true);
assert.equal(lispValidator(improperString), false);
