( function IIFE() {

	let topics = [
  	{ name: 'Apple', count: '1' },
  	{ name: 'Mongo', count: '2' },
  	{ name: 'Banana', count: '5' },
  	{ name: 'Peach', count: '2' },
  	{ name: 'Watermelon', count: '1' },
  	{ name: 'Lemon', count: '2' },
	];

	function getTopics() {
	  document.querySelector(".get-list").addEventListener('click', () => {
		  fetch('/topics')
		  .then( response => response.json() )
		  .then( updated => {
		    topics = updated;
		    console.log(topics);
		  });
	  });
	}

	function sendTopics(newTopic) {
	  fetch(`/topics?name=${newTopic.name}&count=${newTopic.count}`, {
	    method: 'POST',
	    body: JSON.stringify(newTopic),
	    headers: new Headers({
	      'content-type': 'application/json'
	    })
	  })
	  .then(response => {
	  	if (response.ok) {
      	return response.json();
    	} 
    	else {
      	throw Error(newTopic.name + ' already exists!');
    	}
	  })
	  .then(updated => {
	    topics = updated;
	    console.log(newTopic.name + ' is added!');
	  })
	  .catch(error => console.log(error));
	}

	function editTopics(targetTopic) {
	  fetch(`/topics?name=${targetTopic.name}&count=${targetTopic.count}`, {
	    method: 'PUT',
	    body: JSON.stringify(targetTopic),
	    headers: new Headers({
	      'content-type': 'application/json'
	    })
	  })
	  .then(response => {
	  	if (response.ok) {
      	return response.json();
    	} else {
      	throw Error('There is no ' + targetTopic.name);
    	}
	  })
	  .then(updated => {
	    topics = updated;
	    console.log('Set ' + targetTopic.name + ' to 5!');
	  })
	  .catch(error => console.log(error));
	}

	function deleteTopics(targetTopic) {
	  fetch(`/topics?name=${targetTopic.name}&count=${targetTopic.count}`, {
	    method: 'DELETE',
	    body: JSON.stringify(targetTopic),
	    headers: new Headers({
	      'content-type': 'application/json'
	    })
	  })
	  .then(response => {
	  	if (response.ok) {
      	return response.json();
    	} else {
      	throw Error('There is no ' + targetTopic.name);
    	}
	  })
	  .then( updated => {
	  	topics = updated;
	  	console.log(targetTopic.name + ' is deleted!');
	  })
	  .catch(error => console.log(error));
	}

	function addTopicWithCount() {
	  document.querySelector(".add-with-count").addEventListener('click', () => {
	    const newTopic = {name: 'Strawberry', count: '10'};
	    sendTopics(newTopic);
	  });
	}

	function addTopicWithoutCount() {
	  document.querySelector(".add-without-count").addEventListener('click', () => {
	    const newTopic = {name: 'Pear', count: '0'};
	    sendTopics(newTopic);
	  });
	}

	function updateTopic() {
	  document.querySelector(".update-topic").addEventListener('click', () => {
			const targetTopic = {name: 'Strawberry', count: '5'};
	    editTopics(targetTopic);
	  });
	}

	function deleteTopic() {
	  document.querySelector(".delete-topic").addEventListener('click', () => {
			const targetTopic = {name: 'Strawberry'};
	    deleteTopics(targetTopic);
	  });
	}

	function startup() {
		getTopics()
    addTopicWithCount();
    addTopicWithoutCount();
    updateTopic();
    deleteTopic();
  }

  startup();

})();