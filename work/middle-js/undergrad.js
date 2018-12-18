/*
 * Using NodeJS syntax, export an ES6 class-syntax class that extends Student
 * Your class should call super() to set the name
 * Your class should define a degree function that returns 'BS'
 * Export the class you create
 *
*/

const Student = require('./student');

class Undergrad extends Student{
	constructor(name) {
		super(name);
	}

	degree() {
		return 'BS';
	}
}

module.exports = Undergrad;

