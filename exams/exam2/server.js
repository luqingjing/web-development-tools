const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const topics = [
	{ name: 'Apple', count: '1' },
	{ name: 'Mongo', count: '2' },
	{ name: 'Banana', count: '5' },
	{ name: 'Peach', count: '2' },
	{ name: 'Watermelon', count: '1' },
	{ name: 'Lemon', count: '2' },
];

//return the list
app.get('/topics', ( request, response ) => {
  response.json(topics);
});

// add a topic
app.post('/topics', (request, response) => {
  const newTopicName = request.query.name;
  const newTopicCount = request.query.count;
  let exist = false;
  topics.forEach(topic => {
  	if (topic.name === newTopicName) {
  		exist = true;
  		response.status(409);
  	}
  });
  if (exist === false) {
  	const newTopic = {name: newTopicName, count: newTopicCount}
  	topics.push(newTopic);
  }
  response.json(topics);
});

// edit a topic
app.put('/topics', (request, response) => {
  const targetTopicName = request.query.name;
  const targetTopicCount = request.query.count;
  let exist = false;
	for(let i = 0; i < topics.length; i++){ 
	   if (topics[i].name === targetTopicName) {
	   	exist = true;
	    topics[i].count = targetTopicCount; 
	   }
	}
	if (exist === false) {
		response.status(404);
	}
	response.json(topics);
});

// delete a topic
app.delete('/topics', (request, response) => {
  const targetTopicName = request.query.name;
  const targetTopicCount = request.query.count;
  let exist = false;
	for(let i = 0; i < topics.length; i++){ 
	   if (topics[i].name === targetTopicName) {
	   	exist = true;
	    topics.splice(i, 1); 
	   }
	}
	if (exist === false) {
		response.status(404);
	}
	response.json(topics);
});

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));