const express = require('express');
const report = require('./report');
const app = express();
const PORT = 3000;

app.use(express.static('./public')); // Never actually serve up the same dir as your programs
// public or built or dist directories are more common and safer

app.get('/report', function(request, response) {
	const button = request.query.button;
	response.redirect(`/report/${button}`);
});

app.get('/report/:button', function(request, response) {
	const button = request.params.button;
	const printRes = report.printList(button);
	const html = `
	<!doctype html>
	<html>
	<head></head>
	<body>
		<ul>
			${printRes}
		</ul>
		<a href="http://localhost:3000/">RETURN</a>
	</body>
	</html>
	`;
	response.send(html);
	console.log("Button " + button + " was pressed");
});

app.listen(PORT, () => console.log(`Exam1 listening on port ${PORT}!`));