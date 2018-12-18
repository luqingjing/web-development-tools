console.log("Hello World");

const element = document.getElementById("b1");
element.addEventListener("click", function() {
	if (element.className === "color1") {
   	element.className = "color2";
   } else {
   	element.className = "color1";
   }
});