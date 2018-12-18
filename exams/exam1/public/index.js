const button = document.getElementById("b1");
let count = 1;
button.addEventListener("click", function() {
	var newButton = document.createElement("button");
	newButton.innerHTML = count;
	newButton.name = "button";
	newButton.value = count;
	count++;
	document.getElementById("buttonList").appendChild(newButton);
}); 