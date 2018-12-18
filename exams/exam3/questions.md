# Exam 3 Questions

Answers should be roughly 2-5 sentences, and in your own words.

Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.

## Q: Describe all the parts of a URL and say what their purpose is in simple language (a sentence each)

1. Protocol: The first part of the URL indicates which protocol the browser must use.
2. Hostname: The DNS domain name or IP address of the server indicates where the resource is located.
3. Port: The TCP port number that the server is listening for incoming requests from the clients.
4. Path-and-file-name: The name and location of the requested resource, under the server document base directory.

## Q: When do you risk losing the intended value of `this`?

1. When we pass a method (that uses this) as a parameter to be used as a callback function
2. When we use an inner method (a closure)
3. When method is assigned to a variable
4. When borrowing methods

## Q: Demonstrate the three ways of working around losing the intended value of `this`?

1. Use `self` to hold the value of `this`
2. Use the `.bind()` method to explicitly bind the value of `this`
3. Use a fat arrow function to maintain the value of `this`

## Q: Write a closure named storage that makes the following code work:
```
const trunk = storage('tire');
const backpack = storage('book');
console.log(trunk()); // 'tire'
trunk('bags');
console.log(trunk()); // 'bags'
console.log(backpack()); // 'book'
console.log(trunk()); // 'bags'
backpack(null);
console.log(backpack()); // null
```

```javascript
function storage(word) {
	return function(temp) {
		if (temp !== undefined) {
			word = temp;
		}
		return word;
	}
}
```

## Q: What does 'semantic HTML' mean in practical terms?  What do you do to be semantic?

Semantic HTML is using html to reinforce structural meaning.
 
We can use tags, class names, and ids that reinforce the meaning of the content within the tags.
 
## Q: Why should you generally add/remove classes from HTML elements to change appearance via JS instead of changing the styling on the element directly?

Add/remove classes is far more maintainable. 

It is much easier to add and remove style properties from a style rule in CSS as opposed to adding and removing styling lines on the element directly. 

Add/remove classes not only lets user style the element they are interacting with, it can also style elements all over the page.
 
## Q: Why should you not explicitly set the height and width of all your HTML elements?

Because different operating systems, browsers and display resolutions may render the same page slightly differently. So the website may not be the same.

## Q: What is the role of each of HTML, CSS, and JS with regards to a web page (not server-side JS)

HTML describes the content and defines the basic structure.

CSS gives style and structure to the content.
 
JavaScript controls actions and events of the website.
 
## Q: List the 3 basic elements of a RESTful service API and what they mean (1-2 sentences each)

1. The base URI for the web service, such as http://example.com/resources.
2. The Internet media type of the data supported by the web service. This is often JSON, XML or YAML but can be any other valid Internet media type.
3. The set of operations supported by the web service using HTTP methods (e.g., POST, GET, PUT or DELETE).

## Q: List 4 HTTP verbs and their meaning in a RESTful sense

1. GET: To read or retrieve a resource.
2. POST: To create a resource on the server.
3. PUT: To change the state of a resource or to update it. 
4. DELETE: To remove or delete a resource.

## Q: In the code below, why do I say 'property' is NOT inherited.  What change would make it inherited?

```
function Foo() { 
  this.property = 'someValue';
}
const instance = new Foo();
```

Because this way did not change the prototype of the `instance`. 

Modify `instance.prototype` to be `Foo()`.

```javascript
function Foo() { 
  this.property = 'someValue';
}
function instance(){}
instance.prototype = new Foo();
```

## Q: What is the event loop?  When is it used?

Event Loop is a constantly running process which checks if call stack is empty or not. If yes then it will execute the function from callback queue.

It is used when using asynchronous JavaScript (such as callbacks, promises, and async/await) that can perform long network requests without blocking the main thread.
 
## Q: Why does a Promise have a .catch() method?  Why not use try/catch?

Because a rejected Promise will propagate up in the stack unless be catched, the `.catch()` method will return a Promise and deals with rejected cases.

No errors will be caught if we use `try/catch` for asynchronous functions. The function will begin its course while the outer stack runs through and gets to the last line without any errors.
 
## Q: What is a callback?  Give an example of one.

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function do_a( callback ){
  setTimeout( function(){
    // simulate a time consuming function
    console.log( '`do_a`: this takes longer than `do_b`' );
 
    // if callback exist execute it
    callback && callback();
  }, 3000 );
}
 
function do_b(){
  console.log( '`do_b`: now we can make sure `do_b` comes out after `do_a`' );
}
 
do_a( function(){
  do_b();
});
```

## Q: What does it mean to say "A function is a first-class citizen in JS"?

A first-class object, referred to as a first-class citizen, is an object that supports all of the operations generally allowed to other objects.

First-class functions, meaning that functions are treated like any other first-class object — they can be stored in variables, passed around, returned from other functions, and hold their own properties.