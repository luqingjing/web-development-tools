const Student = function( name ) {
  this.name = name;
};
const Class = function() {
  this.students = [];
  this.tests = {};
  this.testNames = [];
  this.scores = {};
};
Class.prototype.add = function( student ) {
  this.students.push(student);
  this.scores[student.name] = {};
};
Class.prototype.roster = function() {
  this.students.forEach( function(student) { console.log(student.name); } );
};
Class.prototype.addTest = function( testName, weight ) {
  this.testNames.push(testName);
  this.tests[testName] = weight
};
Class.prototype.addScore = function( student, testName, score) {
  this.scores[student.name][testName] = score;
};
Class.prototype.classGrade = function(student) {
  const self = this;
  const totalWeight = this.testNames.reduce( function (total, testName) {
    total += self.tests[testName];
    return total;
  }, 0); // Google "MDN reduce" for more info

  const gradeTotal = this.testNames.reduce( function (total, testName) {
    const score = this.scores[student.name][testName];
    const scoreWeight = this.tests[testName];
    total += score * (scoreWeight/totalWeight);
    return total;
  }.bind(this), 0);
  return gradeTotal;
};

Class.prototype.grades = function() {
  this.students.forEach( (student) => {
    console.log(`${student.name} - ${this.classGrade(student)}`);
  });
};

const info6250 = new Class();
const jane = new Student('Jane');
const barb = new Student('Barb');
info6250.add(jane);
info6250.add(barb);
info6250.addTest('Exam', 60);
info6250.addTest('Homework', 40);
info6250.addScore(jane, 'Exam', 50);
info6250.addScore(jane, 'Homework', 100);
info6250.addScore(barb, 'Exam', 75);
info6250.addScore(barb, 'Homework', 75);
info6250.roster();
info6250.grades();

