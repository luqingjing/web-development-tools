const Undergrad = require('./undergrad');
const Grad = require('./grad');
const Student = require('./student');

const jane = new Undergrad('Jane');
const barb = new Grad('Barb');
const alia = new Student('Alia');

alia.graduate();
jane.graduate();
barb.graduate();
