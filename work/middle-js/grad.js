/*
 * Using NodeJS syntax, export an Constructor Function class-syntax class that extends Student
 * Your class should define a degree function that returns 'Masters'
 * Export the class you create
 * super() doesn't exist without ES6 class syntax
 * Instead use this line in your constructor function to "extend" Student
 *  Object.setPrototypeOf(Object.getPrototypeOf(this), new Student(name));
 *
*/

const Student = require('./student');

function Grad(name) {
	Object.setPrototypeOf(Object.getPrototypeOf(this), new Student(name));
	this.degree = function() {
		return 'Masters';
	}
}

module.exports = Grad;

