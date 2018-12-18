# Exam 1 Answers

* Create a feature-branch named `exam1`
* Modify the questions.md file to add answers to each question
* Create the files needed to complete the rest of the assignment listed below, creating those files in this directory and subdirectories as needed.
* Create a Pull Request (PR) to merge your exam1 branch in to your master branch, and assign that PR to me and the TA (WendyFengWM)
* Create the pull request by the start of next class

# Exam 1 Coding

* Create an express server (server.js)
    * that listens on port 3000
    * that serves up static files from a "public" subdirectory
        * See "work/basic-project/server.js" to see how to set up serving static files
    * that serves up the dynamic page for /report detailed below
* Include the package.json that lists all the dependencies such that `npm install` will install them
    * The only outside library to install is "express"
* Have the index.html contain a button with class name `exam1-button`
* Have the index.html contain an unordered list with class name `button-list` (initially empty)
* The button-list list will be horizontally centered on the page _using CSS flexbox_
    * We did not cover flexbox in class.  There is plenty of info on google, just avoid "float" and "position" and don't worry about older browsers, just have it work in modern Chrome.
    * Flexbox can be daunting if you try to figure out how to do a specific thing - instead, learn how flexbox works overall, THEN try the specific thing
* Clicking the `exam1-button` will add a button to the button-list list each time it is clicked
    * This will be done by _client-side_ (browser) JS
    * The first button added will have the text "1", the second button added will have the text "2", and so forth
* Clicking any of the buttons in the button-list list will load the page /report/BUTTON-NUMBER (so /report/1 or /report/3, etc)
    * That will pass the number of the button as query param "button" (e.g. button=3)
    * The _server_ will console.log the message ("Button X was pressed" where X is the number)
    * the _server_ will return a _dynamic_ page that contains an unordered list with a number of items equal to the clicked button (so /report/1 will have a list with "Button", while /report/3 will have a list with "Button", "Button", and "Button".  This page will also have a link ("a" tag) to return to the index.html.
 
Allowances:
* You may create any additional HTML structures needed
* You may assign any additional CSS classes needed
* You may create any static CSS and JS files needed (name them well)

Particular requirements:
* Do not use CSS float
* Do not use position: absolute
* Do not use inline CSS
* Do not use inline JS
* Only add event listeners using addEventListener
* Be sure to use lowercase filenames
* Be sure to use camelCase JS variable names
* Be sure to use kebab-case CSS class names
* Be sure to have clean, readable files
* Do not create JS variables in the global scope
* Do not have browser console messages or warnings
* Do not include node_modules in your PR
* Do not include IDE or other outside files in your PR
* Do not use outside libraries other than express
* Be sure to assign the PR to me and the TA (WendyFengWM)

