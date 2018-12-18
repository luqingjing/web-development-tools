# Exam 1 Questions

Answers should be roughly 2-5 sentences, and in your own words.

Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.

## Q: What is the difference between a dynamic asset and a static asset?

A static asset means that its contents won't change from request to request. It doesn’t depend on user input or preferences.

A dynamic asset is the asset that changes on a per-request basis. It will deliver entirely different content to one user than another.

## Q: What is the difference between a relative and absolute path?  

An absolute path gives the location of the file or directory starting at the root. Regardless of what directory you are "in", the absolute path will always refer to the same file or directory.

A relative path gives the location of the file or directory relative to another directory (usually the directory you are in, but running programs may look for other files relative to some other path). 

## Q: What is the difference between server-side and client-side JS?

Client-side means that the JavaScript code is run on the client machine, which is the browser. Server-side JavaScript means that the code is run on the server which is serving web pages. One runs in the browser (client side), the other runs on the server.


## Q: Why might we use an IIFE?

This pattern is often used when trying to avoid polluting the global namespace. An IIFE is a good way at protecting the scope of the function and the variables within it. Because JS is function scoped, you can contain everything declared to just that function, all the variables etc will be kept there and won’t leak out.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?

`var` declares a variable within a function, and it is function-scoped. You should not use `var` at all unless you have to use an old version of JS and can't use a transpiler.

`const` says the variable being declared/assigned here will NOT be reassigned, and it is block-scoped and not being hoisted. Every variable should be declared as `const` unless `let` must be used because you are re-assigning the variable a value.

`let` is just like `const` as far as block-scoping and not being hoisted, except the variable can be reassigned a new value. `let` should be avoided unless needed.

## Q: What are the 4 ways to create inheritence? (no examples needed, just a sentence describing each)

**Brute Force** fundamentally shows how JS inheritance is put together.

A **constructor function** is a function that runs at the creation of an object. We create such a function, and use the `new` keyword to instruct JS to create a new object, set the prototype, and so forth.

**`Object.create()`** gives you a new object with the passed object as the prototype (or no prototype if you pass null).

**ES6 Class syntax** is easier to track types, and calling methods on the prototype when you have a method of that name becomes easier.

## Q: Give a demonstration of 1 way to create JS inheritence to _inherit_ a method named "purr".

```javascript
const purr = function(){};
const purrInheritance = new purr();
```

## Q: Give a demonstration of a different way to create JS inheritence to _inherit_ a method named "hiss".

```javascript
const basis = { hiss: function(){} };
const instance = Object.create(basis);
```

## Q: What does it mean that the HTTP Protocol is "stateless"?
The HTTP Protocol is "stateless" means that each request/response transaction is managed without relying on any other request/response transaction. The HTTP protocol has no mechanism to remember or distinguish one request/response from another, or that the two might be connected. The HTTP Protocol does not require the server to retain information or status about each user for the duration of multiple requests/responses.