# Basic JS Assignment (Due 11:59pm Sunday night)

**To submit: Create a PR merging the branch for this project into your master branch on Github.  Add me as a reviewer**

Create a feature branch named `basic-js` to hold this work.  All work should be in this directory and subdirectories.

This assignment has multiple parts.  Be sure to complete them all, with their contents in the proper directories.  Be sure to follow all the rule outlined in the best practices given in class and in the files in this repo, especially `absolutes.md`

**Make sure not to include IDE files, node_modules directories, or files outside the work for this specific assignment in the commit.  Always check with `git status` before committing**

# Part 1

* Create a subdirectory `browser` to hold all the files for this part
* Create an index.html that contains a div with class "demo", which contains a button with the text "Click Me"
* Create a demo.js that is loaded by the index.html AFTER the body content has loaded
* Have the demo.js print "Hello World" to the console.
* Have the demo.js attach an event to the button so that when it is clicked, it toggles color between #BADA55 and #C0FFEE.
* Have the above colors live in demo.css, that is loaded by index.html, and the color change happens by changing a class on the button.

# Part 2 

* Create a subdirectory `bundled` to hold all the files for this part
* Create an index.html that contains a div with class "demo", which contains a button with the text "Click Me"
* The index.html file will load a file: bundle.js
* Create a demo.js that require()s a file lib.js
* lib.js will export a function that returns a random color from this list each time it is called: (Actually it should give a string that can be used as a class name so the CSS will apply these colors)
    * #BADA55
    * #C0FFEE
    * #G00GLE
    * #5AD  
    * #F00
    * #0FF
    * #ACE
* demo.js attaches a handler to the first button in the demo div that will change the color (by changing the class name) to the result of a call to that function from lib.js each time the button is clicked.
* include a package.json in the bundled directory that has your name and contact info
* modify the "scripts" section of package.json so that `npm run build` will create the bundle.js from the demo.js
* DO NOT INCLUDE BUNDLE.JS OR ANYTHING IN `node_modules` IN YOUR COMMIT.  Include/modify a .gitignore so that it will not be part of your commit.
* I will need to load your code, run `npm install` and `npm run build` before your pages can be viewed.
