const lib = require('./lib');

const element = document.getElementById("b1");
element.addEventListener("click", function() {
	let color = lib.randomColor();
  element.className = color;
});