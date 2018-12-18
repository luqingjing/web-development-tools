/* Do not update this file! */

const Student = function(name) {
  this.name = name;
};

Student.prototype.degree = function() {
  return 'Undecided';
};

Student.prototype.graduate = function() {
  console.log(`${this.name} graduates with a ${this.degree()} degree`);
};

module.exports = Student;
