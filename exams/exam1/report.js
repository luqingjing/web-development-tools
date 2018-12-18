function printList(number) {
	var res = "";
	for(var i = 0; i < number; i++) {
		res += "<li>Button</li>";
	}
	return res;
}

module.exports = {
	printList
}