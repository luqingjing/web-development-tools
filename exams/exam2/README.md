# Exam 2

* Create a feature-branch named `exam2`
* Create the files needed to complete the rest of the assignment listed below, creating those files in this directory and subdirectories as needed.
* Create a Pull Request (PR) to merge your exam2 branch in to your master branch, and assign that PR to me and the TA (WendyFengWM)
* Create the pull request before the start of next class

# Exam 2 Coding

* Create an express server (server.js)
    * that listens on port 3000
* Have a RESTful service
    * RESTful means the URL maps to a "resource" concept
    * RESTful means the HTTP methods (verbs) are meaningful
    * RESTful means the HTTP status codes are meaningful
* The service will track counts on different topics
    * All responses will be in JSON
* Have an endpoint that will add a topic (a topic is a single-word name)
    * The count will default to 0 for a new topic
    * A "count" query param can optionally be sent with the initial value, otherwise the count of the new topic will default to 0
    * A 409 error code is returned if they attempt to create an existing topic
* Have an endpoint that will return the list of current topics and their counts as an object via JSON
* Have an endpoint that will delete a given topic from the list
    * A 404 error code is returned if there is no such topic
* Have an endpoint that will replace the count for a given topic with a given count
    * So the endpoint would let someone saying "I want to set topic 'Pizza' to 5" do that.
    * A 404 error code is returned if there is no such topic
* Include the package.json that lists all the dependencies such that `npm install` will install them
    * The only outside library to install is "express" (and "body-parser")

* Have a static index.html served and a static test.js served
* The page will be 5 buttons
* Each button will say what it tests, then run that service call and console.log the results when that button is pressed
    * Get the list - 1 call
    * Add a topic with a count, without a count - 2 calls
    * Update a topic with a different count - 1 call
    * Delete a topic - 1 call
    * Any params to be sent along can be hardcoded (Example: the button to add a topic can always add topic "Cats") - By combining buttons I can test error conditions, such as by adding a topic twice.
    * If a service has an error, there should be a status part of the _page_ (not console.log) that tells me what happened.

I should be able to download your code, run `npm install`, `node server.js`, then visit localhost:3000 to see the page with the 5 buttons, then press the buttons in any particular order to witness the results

Allowance:
* You may create any additional HTML structures needed
* You may assign any additional CSS classes needed
* You may create any static CSS and JS files needed (name them well)

Particular requirements:
* Do not use var
* Always prefer const over let
* Don't have commented out code or console.log anything you aren't instructed to
* Check for errors in your service calls and update the screen as instructed
* Do not use inline CSS
* Do not use inline JS
* Only add event listeners using addEventListener
* Be sure to use lowercase filenames
* Be sure to use camelCase JS variable names
* Be sure to use kebab-case CSS class names
* Be sure to have clean, readable files
* Do not create JS variables in the global scope
* Do not include node_modules in your PR
* Do not include IDE or other outside files in your PR
* Do not use outside libraries other than express
* Be sure to assign the PR to me and the TA (WendyFengWM)

