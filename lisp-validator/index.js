const lispValidator = (str) => {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) == '(') {
			stack.push('(');
		} else if (str.charAt(i) == ')') {
			stack.pop();
		}
	}
	return stack.length == 0 ? 'True' : 'False';
};

const lispCodeResult = document.querySelector('.lisp-validator-result');

// const lispValidatorValue = document.querySelector('#lisp-validator')?.value;

// const lispValidatorSubmitButton = document.querySelector('#submit-button');

// lispValidatorSubmitButton.addEventListener(
// 	'click',
// 	lispValidator(lispValidatorValue)
// );

let example = 'some text string';

lispCodeResult.innerHTML = `<span>${example}</span>`;
